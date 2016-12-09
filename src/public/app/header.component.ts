import {Component, EventEmitter, Output} from '@angular/core';

@Component({
	selector: 'blog-header',
	template: `
		<h1 class='header-title'>&micro;blog</h1>
		<section class='user-wrapper'>
			<button class='header-btn user-signup' (click)='signIn()'>Sign up</button>
			<button class='header-btn user-login' (click)='logIn()'>Login</button>
			<button class='header-btn user-add-post' (click)='openPostMenu()'><i class="fa fa-pencil" aria-hidden="true"></i></button>
		</section>
	`
})
export class HeaderComponent {

	@Output() onOpenedPostMenu = new EventEmitter<boolean>();

	signIn() {

	}

	logIn() {

	}

	openPostMenu() {
		let isPostOverlayHidden = false;
		this.onOpenedPostMenu.emit(isPostOverlayHidden);
	}

}
