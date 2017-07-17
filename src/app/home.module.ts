import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home-component/home.component';
import { BlogLinkComponent } from './blog-link-component/blog-link.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeComponent, BlogLinkComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
