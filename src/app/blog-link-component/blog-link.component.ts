import { Component, Input } from '@angular/core';
import { Blog } from './Blog';

const template = require('./blog-link.component.html');
const styles = require('./blog-link.component.css');

@Component({
  selector: 'blog-link-component',
  template: template,
  styles: [ styles ]
})
export class BlogLinkComponent {
  @Input() blog : Blog;
}
