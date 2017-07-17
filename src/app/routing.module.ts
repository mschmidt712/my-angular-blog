import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home-component/home.component';
import { AboutComponent } from './about-component/about.component';
import { BlogPageComponent } from './blog-page-component/blog-page.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '',
    component: HomeComponent
  },
  { path: 'blog/:id',
    component: BlogPageComponent
  }, {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
