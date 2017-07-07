import { Component } from '@angular/core';
import { Blog } from '../blog-component/Blog';
const blogs = require('../blogs.data.json');

const template = require('./app.component.html');
const styles = require('./app.component.css');

@Component({
  selector: 'app-root',
  template: template,
  styles: [ styles ],
  providers: [ Blog ]
})
export class AppComponent {
  blogs : Blog[] = blogs;
}
