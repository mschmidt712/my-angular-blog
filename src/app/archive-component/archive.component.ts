import { Component } from '@angular/core';
import { Blog } from '../blog-link-component/Blog';
import { uniqBy } from 'lodash';
const moment = require('moment');
const blogs = require('../blogs.data.json');

const template = require('./archive.component.html');
const styles = require('./archive.component.css');

@Component({
  selector: 'archive-component',
  template: template,
  styles: [ styles ],
  providers: [ Blog ]
})
export class ArchiveComponent {
  blogs : Blog[] = blogs;
  sortedBlogs;

  ngOnInit () {
    this.sortedBlogs = this.sortIntoMonths(this.blogs);
  }

  sortIntoMonths (blogs : Blog[]) {
    const blogsWithDates = blogs.map((obj) => {
      const month = moment.unix(obj.date).format("MMMM");
      const year = moment.unix(obj.date).format("YYYY");
      return Object.assign({}, obj, {
        month: month,
        year: year,
        displayDate: `${month} ${year}`
      });
    });

    const dates = blogsWithDates.map(obj => {
      return obj.displayDate;
    });

    const uniqueDates = uniqBy(dates, function (e) {
      return e;
    });

    const sortedBlogs = uniqueDates.map(date => {
      const obj = {
        date: date,
        posts: blogsWithDates.filter(obj => {
          return (obj.displayDate === date);
        })
      }

      return obj;
    });

    return sortedBlogs;
  }
}
