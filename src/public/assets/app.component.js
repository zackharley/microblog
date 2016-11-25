import {Component} from 'angular2/core';

class AppComponent {
	static get annotations() {
		return [
			new Component({
				selector: 'my-app',
				template: '<h1>Microblog</h1><p>Hello, {{name}}.</p><button (click)="sayMyName()">Say my name</button>'
			})
		];
	}

	constructor() {
		this.name = 'Zack';
	}

	sayMyName() {
		alert(`My name is ${this.name}`);
	}
}

export {AppComponent};
