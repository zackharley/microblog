import {Component} from '@angular/core';

@Component({
	selector: 'microblog',
	template: `
		<main class='blog-wrapper'>
			<post-add class='post-add-overlay'></post-add>
			<blog-header class='header-wrapper'></blog-header>
			<posts class='posts-wrapper'></posts>
		</main>
	`
})
export class AppComponent {

	constructor() { }
}
