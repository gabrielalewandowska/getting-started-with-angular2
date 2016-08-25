import {Component} from '@angular/core';
import {UIROUTER_DIRECTIVES} from 'ui-router-ng2';

@Component({
    selector: 'nav-bar',
    template: require('./nav-bar.html'),
    directives: [UIROUTER_DIRECTIVES]
})

export class NavBar {

}