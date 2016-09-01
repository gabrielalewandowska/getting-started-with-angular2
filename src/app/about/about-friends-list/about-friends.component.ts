import {Component} from '@angular/core';

@Component({
    selector: 'about-friends',
    template: require('./about-friends.html'),
})

export class AboutFriends {
    public friends;

    constructor() {

        this.friends = [
            {
                'name': 'Bob',
                'age': 23,
                'gender': 'male'
            },
            {
                'name': 'Joe',
                'age': 26,
                'gender': 'male'
            },
            {
                'name': 'Sally',
                'age': 33,
                'gender': 'female'
            },
            {
                'name': 'Hector',
                'age': 67,
                'gender': 'male'
            },
            {
                'name': 'Same',
                'age': 27,
                'gender': 'male'
            }
        ]
    }
}