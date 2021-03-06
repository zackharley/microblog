import {Component, Input, Output, EventEmitter} from '@angular/core';
import {PostDeleteService} from './post.delete.service';

@Component({
	selector: 'post',
	template: `
		<header class='post-header'>
			<i *ngIf='credentials && post.author.sub == credentials.user.sub' class='fa fa-times post-delete' (click)="deletePost(post._id)"></i>
		</header>
		<img *ngIf='post.image' class='post-image' src='{{post.image}}'>
		<article class='post-content'>
			<p class='post-date'>{{post.date}}</p>
			<h2 class='post-heading'>{{post.title}}</h2>
			<p class='post-body'>{{post.body}}</p>
		</article>
		<footer class='post-footer'>
			<img class='post-author-photo' [src]='post.author.picture'>
			<p class='post-author-name'>by {{post.author.name}}</p>
		</footer>
	`,
	providers: [PostDeleteService]
})
export class PostComponent {
	@Output() onPostDeleted = new EventEmitter<boolean>();
	@Input() post;
	@Input() credentials;

	constructor(private postDeleteService: PostDeleteService) {

	}

	deletePost(_id) {
		this.postDeleteService.deletePost(_id)
			.subscribe(response => {
				this.onPostDeleted.emit(true);
				console.log(response);
			});
	}
}
