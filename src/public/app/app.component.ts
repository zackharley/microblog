import {Component, OnInit} from '@angular/core';
import {PostsService} from './posts.service';

@Component({
	selector: 'microblog',
	template: `
		<main class='blog-wrapper'>
			<post-add
				(onClosedPostMenu)='setIsOverlayHidden($event)'
				(onPostAdded)='getPosts()'
				[credentials]='credentials'
				[ngClass]='{"hidden": isOverlayHidden, "post-add-overlay": true}'
			></post-add>
			<blog-header
				(onOpenedPostMenu)='setIsOverlayHidden($event)'
				(onLogin)='setCredentials($event)'
				class='header-wrapper'
			></blog-header>
			<posts
				[posts]='posts'
				[credentials]='credentials'
				(onPostDeleted)='getPosts()'
				class='posts-wrapper'
			></posts>
		</main>
	`,
	providers: [PostsService]
})
export class AppComponent implements OnInit {

	private isOverlayHidden: boolean;
	private posts;
	private credentials;

	constructor(private postsService: PostsService) {
		this.isOverlayHidden = true;
	}

	setIsOverlayHidden(isHidden: boolean) {
		this.isOverlayHidden = isHidden;
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

	setCredentials(credentials) {
		this.credentials = credentials;
	}

}
