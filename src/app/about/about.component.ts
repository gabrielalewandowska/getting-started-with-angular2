import {Component} from '@angular/core';
import {UIROUTER_DIRECTIVES} from 'ui-router-ng2';

@Component({
    selector: 'about',
    template: require('./about.html'),
    directives: [UIROUTER_DIRECTIVES]
})

export class About {

}