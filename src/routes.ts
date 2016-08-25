/// <reference path="../typings/index.d.ts"/>

import {Injectable} from '@angular/core';
import {UIRouter} from 'ui-router-ng2/router';
import {About} from "./app/about/about.component";
import {AboutForm} from "./app/about/about-form/about-form.component";
import {AboutFriends} from "./app/about/about-friends-list/about-friends.component";

const INITIAL_STATES: any[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
    views: {
      $default: { component: About },
      'about-form@About': { component: AboutForm },
      'about-friends@About': {component: AboutFriends }
    }
  }
];

@Injectable()
export class MyUIRouterConfig {
  configure(uiRouter: UIRouter) {
    uiRouter.urlRouterProvider.otherwise(() => uiRouter.stateService.go('App', null, null));
    uiRouter.stateRegistry.root();
    INITIAL_STATES.forEach(state => uiRouter.stateRegistry.register(state));
  }
}
