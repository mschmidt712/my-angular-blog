import { Component, Input } from '@angular/core';
import 'slick-carousel';
import 'jquery';

const blogData = require('../blogs.data.json');
const template = require('./carousel.component.html');
const styles = require('./carousel.component.css');

@Component({
  selector: 'carousel-component',
  template: template,
  styles: [ styles ]
})
export class CarouselComponent {
  slideConfig : any = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "centerMode": true,
    "centerPadding": '60px',
    "dots": true,
    "dots-class": 'carousel-dots',
    "infinite": true,
    "prevArrow": $('.prev'),
    "nextArrow": $('.next'),
    "responsive": [
      {
        "breakpoint": 600,
        "settings": {
          "slidesToShow": 1
        }
      }]
  };
  currentSlide: number = 1;
  @Input() slides : string[];

  goToNextSlide () {
    if (this.currentSlide + 1 <= this.slides.length) {
      this.currentSlide = this.currentSlide + 1;
    } else {
      this.currentSlide = 1;
    }

    return this.currentSlide;
  }

  goToPrevSlide () {
    if (this.currentSlide - 1 < 1) {
      this.currentSlide = this.slides.length;
    } else {
      this.currentSlide = this.currentSlide - 1;
    }

    return this.currentSlide;
  }
}
