import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home-component/home.component';
import { BlogComponent } from './blog-component/blog.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    HomeComponent, BlogComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
