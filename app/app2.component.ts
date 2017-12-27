import { Component } from '@angular/core';

@Component({
    selector : 'my-app2',
    template: '<h3>Hello {{name2}}</h3>'
})

export class App2Component {name2 = 'new Hello World';}