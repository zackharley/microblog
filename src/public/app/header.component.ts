import {Component} from '@angular/core';

@Component({
	selector: 'blog-header',
	template: `
		<h1 class='header-title'>&micro;blog</h1>
		<section class='user-wrapper'>
			<a class='user-signup' href='#'>Sign up</a>
			<a class='user-login'href='#'>Login</a>
			<button class='user-add-post'><i class="fa fa-pencil" aria-hidden="true"></i></button>
		</section>
	`
})
export class HeaderComponent { }
