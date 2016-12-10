import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {AuthService} from 'ng2-ui-auth';

@Component({
	selector: 'blog-header',
	template: `
		<h1 class='header-title'>&micro;blog</h1>
		<section class='user-wrapper'>
			<button *ngIf='!credentials' class='header-btn user-login' (click)='login()'>Login</button>
			<button *ngIf='credentials' class='header-btn user-add-post' (click)='openPostMenu()'><i class="fa fa-pencil" aria-hidden="true"></i></button>
			<button *ngIf='credentials' class='header-btn user-logout' (click)='logout()'>Logout</button>
		</section>
	`
})
export class HeaderComponent implements OnInit {

	@Output() onOpenedPostMenu = new EventEmitter<boolean>();
	@Output() onLogin = new EventEmitter();
	credentials;

	constructor(
		private auth: AuthService
	) {}

	ngOnInit() {
		if(this.auth.getPayload() && this.auth.getExpirationDate()) {
			this.credentials = {
	    		user: this.auth.getPayload(),
				expiration: this.auth.getExpirationDate()
			};
		}

		this.onLogin.emit(this.credentials);
	}

	login() {
		this.auth.authenticate('google')
            .subscribe({
                error: (err: any) => {
                	console.error(err);
                },
                complete: () => {
                	this.credentials = {
                		user: this.auth.getPayload(),
						expiration: this.auth.getExpirationDate()
					};
					this.onLogin.emit(this.credentials);
                }
            });
	}

	logout() {
		this.auth.logout()
			.subscribe({
				error: (err: any) => {
					console.error(err);
				},
				complete: () => {
	                this.credentials = null;
					this.onLogin.emit(this.credentials);
                }
			});
	}

	openPostMenu() {
		let isPostOverlayHidden = false;
		this.onOpenedPostMenu.emit(isPostOverlayHidden);
	}

}
