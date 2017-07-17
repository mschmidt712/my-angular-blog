import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Blog } from '../blog-link-component/Blog';

const blogData = require('../blogs.data.json');
const template = require('./blog-page.component.html');
const styles = require('./blog-page.component.css');

@Component({
  selector: 'blog-page-component',
  template: template,
  styles: [ styles ],
  providers: [Blog]
})
export class BlogPageComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blog: Blog
  ) {}

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) =>
      params.get('id')
    )
    .subscribe((id: string) => this.blog = blogData[id]);
  }
}
