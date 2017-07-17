const AWS = require('aws-sdk');
const config = require('./awsConfig.json');
const fs = require('fs');
const path = require('path');

const s3 = new AWS.S3({region: config.region});
const bucketName = config.bucketName;

const contentTypeMap = {
  '.css': 'text/css',
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.svg': 'image/svg+xml',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-sfnt',
  '.ttf': 'application/font-sfnt',
  '.woff': 'application/font-woff',
  '.json': 'application/json',
  '.txt': 'text/plain'
};

function getAssetNames () {
  const directoryName = path.join(__dirname, '../dist');
  return new Promise((resolve, reject) => {
    fs.readdir(directoryName, (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
}

function loadAssetsToS3 (assets) {
  const assetFiles = assets.filter(name => {
    return name !== 'fonts';
  });

  const fileContents = assetFiles.map(asset => {
    return new Promise((resolve, reject) => {
      const fileName = path.join(__dirname, '../dist', asset);
      fs.readFile( fileName, (err, data) => {
        if (err) return reject(err);
        else return resolve({name: asset, body: data});
      });
    });
  });

  let promises = [];
  Promise.all(fileContents).then((assets) => {
    promises = assets.map(asset => {
      const assetType = path.extname(asset.name);
      const ContentType = contentTypeMap[assetType];

      const params = {
        Bucket: bucketName,
        Key: asset.name,
        ContentType,
        Body: asset.body
      };

      const request = s3.putObject(params);
      return request.promise();
    });
  })
  .catch(console.error);

  return Promise.all(promises);
}

getAssetNames()
  .then(loadAssetsToS3)
  .then(console.log)
  .catch(console.error);

