import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app-component/app.component';
import { HeaderComponent } from './header-component/header.component';
import { HomeModule } from './home.module'
import { AboutModule } from './about.module'
import { HomeComponent } from './home-component/home.component';
import { AboutComponent } from './about-component/about.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '',
    component: HomeComponent
  }, {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    HomeModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
