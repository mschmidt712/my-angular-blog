import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app-component/app.component';
import { HeaderComponent } from './header-component/header.component';
import { RoutingModule } from './routing.module'
import { HomeModule } from './home.module'
import { AboutModule } from './about.module'
import { BlogModule } from './blog.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AboutModule,
    BlogModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
