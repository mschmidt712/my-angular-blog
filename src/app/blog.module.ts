import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickModule } from 'ngx-slick';

import { BlogPageComponent } from './blog-page-component/blog-page.component';
import { CarouselComponent } from './carousel-component/carousel.component';

@NgModule({
  imports: [
    CommonModule,
    SlickModule.forRoot()
  ],
  declarations: [
    BlogPageComponent,
    CarouselComponent
  ],
  exports: [
    BlogPageComponent
  ]
})
export class BlogModule { }
