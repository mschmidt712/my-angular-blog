import { Component } from '@angular/core';

const template = require('./home-header.component.html');
const styles = require('./home-header.component.css');

class SocialMediaObject {
    public name : string;
    public link : string;
    public imgSrc : string;

    constructor() {}
}

@Component({
  selector: 'home-header',
  template: template,
  styles: [ styles ]
})
export class HomeHeaderComponent {
  socialMediaIcons : SocialMediaObject[] = [{
    name: 'GitHub',
    link: 'https://github.com/mschmidt712',
    imgSrc: '/github.png'
  }, {
    name: 'Facebook',
    link: 'https://www.facebook.com/marie.e.schmidt',
    imgSrc: '/facebook.png'
  }, {
    name: 'Twitter',
    link: 'https://twitter.com/syntacticSugga',
    imgSrc: '/twitter.png'
  }];
}


