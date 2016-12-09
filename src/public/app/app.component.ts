import {Component, OnInit} from '@angular/core';
import {PostsService} from './posts.service';

@Component({
	selector: 'microblog',
	template: `
		<main class='blog-wrapper'>
			<post-add
				(onClosedPostMenu)='setIsOverlayHidden($event)'
				(onPostAdded)='getPosts()'
				[ngClass]='{"hidden": isOverlayHidden, "post-add-overlay": true}'
			></post-add>
			<blog-header (onOpenedPostMenu)='setIsOverlayHidden($event)' class='header-wrapper'></blog-header>
			<posts
				[posts]='posts'
				(onPostDeleted)='getPosts()'
				class='posts-wrapper'></posts>
		</main>
	`,
	providers: [PostsService]
})
export class AppComponent implements OnInit {

	isOverlayHidden: boolean;
	posts;

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

}
