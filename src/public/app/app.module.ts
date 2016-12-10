import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {Ng2UiAuthModule, CustomConfig} from 'ng2-ui-auth';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component';
import {PostsComponent} from './posts.component';
import {PostComponent} from './post.component';
import {PostAddComponent} from './post.add.component';

const config = require('./../config/auth.config');

class AuthConfig extends CustomConfig {

	defaultHeaders = {
		'Content-Type': 'application/json'
	};

	providers: {[provider: string]: IProvider} = {google: {clientId: config.googleClient}};
}

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		Ng2UiAuthModule.getWithConfig(AuthConfig)
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		PostsComponent,
		PostComponent,
		PostAddComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
