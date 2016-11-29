import {Component} from '@angular/core';
import {PostsService} from './posts.service';
import {OnInit} from '@angular/core';

@Component({
	selector: 'posts',
	template: `
		<post *ngFor='let post of posts' class='post-wrapper' [post]='post'></post>
	`,
	providers: [PostsService]
})
export class PostsComponent implements OnInit {

	posts;
	errorMessage;

	constructor(private postsService: PostsService) {

	}

	getPosts() {
		this.postsService.getPosts()
			.subscribe(posts => {
				console.log(posts);
				this.posts = posts;
			});
	}

	ngOnInit() {
		this.getPosts();
	}

}
