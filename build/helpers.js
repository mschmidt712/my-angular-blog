'use strict';

var path = require('path');
var ROOT = process.cwd();

console.log('root directory:', root() + '\n');

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

function root(args) {
  /* eslint-disable */
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
}

function excludeIndexHtml(src, htmlIndexes) {
  return root(path.join(src, 'index.html'));
}

exports.hasProcessFlag = hasProcessFlag;
exports.root = root;
exports.excludeIndexHtml = excludeIndexHtml;
