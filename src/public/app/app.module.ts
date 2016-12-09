import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component';
import {PostsComponent} from './posts.component';
import {PostComponent} from './post.component';
import {PostAddComponent} from './post.add.component';

import {FileSelectDirective} from 'ng2-file-upload';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		PostsComponent,
		PostComponent,
		PostAddComponent,
		FileSelectDirective
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
