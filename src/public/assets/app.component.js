import {Component} from 'angular2/core';

class AppComponent {
	static get annotations() {
		return [
			new Component({
				selector: 'my-app',
				template: '<h1>Microblog</h1>'
			})
		];
	}

	constructor() {

	}
}

export {AppComponent};
