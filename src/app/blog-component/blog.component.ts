import { Component, Input } from '@angular/core';
import { Blog } from './Blog';

const template = require('./blog.component.html');
const styles = require('./blog.component.css');

@Component({
  selector: 'blog-component',
  template: template,
  styles: [ styles ]
})
export class BlogComponent {
  @Input() blog : Blog;
}
