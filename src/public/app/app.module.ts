import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component';
import {PostsComponent} from './posts.component';

@NgModule({
	imports: [BrowserModule],
	declarations: [
		AppComponent,
		HeaderComponent,
		PostsComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
