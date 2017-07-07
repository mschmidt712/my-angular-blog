import { Component } from '@angular/core';
import { Blog } from '../blog-component/Blog';
const blogs = require('../blogs.data.json');

const template = require('./home.component.html');
const styles = require('./home.component.css');

@Component({
  selector: 'home-component',
  template: template,
  styles: [ styles ],
  providers: [ Blog ]
})
export class HomeComponent {
  blogs : Blog[] = blogs;
}
