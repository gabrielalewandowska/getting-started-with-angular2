import {Component} from '@angular/core';
import {NavBar} from "../shared/navbar/navbar.component";
import {UIROUTER_DIRECTIVES} from 'ui-router-ng2';

@Component({
  selector: 'app-layout',
  template: require('./hello.html'),
  directives: [NavBar, UIROUTER_DIRECTIVES]
})

export class HelloComponent {
  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
  }
}
