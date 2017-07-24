import { Component } from '@angular/core';

const template = require('./header.component.html');
const styles = require('./header.component.css');

@Component({
  selector: 'header-component',
  template: template,
  styles: [ styles ]
})

export class HeaderComponent {
  title : String = 'Water & Wanderlust';
  navButtons: navButton[] = [{
    name: 'Home',
    route: ''
  }, {
    name: 'About',
    route: '/about'
   }, {
     name: 'Archive',
     route: '/archive'
   }];
}

//Type Definitions
class navButton {
  public name : String;
  public route : String;
}
