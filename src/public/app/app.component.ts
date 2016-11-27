import {Component} from '@angular/core';

@Component({
	selector: 'microblog',
	template: `
		<main>
			<blog-header></blog-header>
			<posts></posts>
		</main>
	`
})
export class AppComponent {

	constructor() { }
}
