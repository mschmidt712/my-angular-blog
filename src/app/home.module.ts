import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home-component/home.component';
import { HomeHeaderComponent } from './home-header-component/home-header.component';
import { ArchiveComponent } from './archive-component/archive.component';
import { BlogLinkComponent } from './blog-link-component/blog-link.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeComponent, HomeHeaderComponent, BlogLinkComponent, ArchiveComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
