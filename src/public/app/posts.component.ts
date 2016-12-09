import {Component, EventEmitter, Input, Output} from '@angular/core';
// import {PostsService} from './posts.service';
import {OnInit} from '@angular/core';

@Component({
	selector: 'posts',
	// template: `
	// 	<post (onPostDeleted)='getPosts()' *ngFor='let post of posts' class='post-wrapper' [post]='post'></post>
	// `,
	template: `
		<post (onPostDeleted)='emitPostDeleted()' *ngFor='let post of posts' class='post-wrapper' [post]='post'></post>
	`,
	// providers: [PostsService]
})
export class PostsComponent {

	@Output() onPostDeleted = new EventEmitter<boolean>();
	@Input() posts;
	errorMessage;

	// constructor(private postsService: PostsService) {

	// }

	constructor() {}

	// getPosts() {
	// 	this.postsService.getPosts()
	// 		.subscribe(posts => {
	// 			console.log(posts);
	// 			this.posts = posts;
	// 		});
	// }

	// ngOnInit() {
	// 	this.getPosts();
	// }

	emitPostDeleted() {
		this.onPostDeleted.emit(true);
	}

}
