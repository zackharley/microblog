import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
	selector: 'posts',
	template: `
		<post
			(onPostDeleted)='emitPostDeleted()'
			*ngFor='let post of posts'
			class='post-wrapper'
			[post]='post'
			[credentials]='credentials'
		></post>
	`
})
export class PostsComponent {

	@Output() onPostDeleted = new EventEmitter<boolean>();
	@Input() posts;
	@Input() credentials;
	errorMessage;

	constructor() {}

	emitPostDeleted() {
		this.onPostDeleted.emit(true);
	}

}
