import {Component} from '@angular/core';
import {PostAddService} from './post.add.service';

@Component({
	selector: 'post-add',
	template: `
		<section class='post-add-wrapper'>
			<header class='post-add-header'>
		  		<p class='post-add-as'>Posting as {{name}}</p>
		  	</header>
		  	<section class='post-add-fields'>
		  		<input [(ngModel)]='postTitle' class='post-add-title' type='text' placeholder='Title'>
		  		<textarea [(ngModel)]='postBody' (input)='updateCharacterCount()' maxlength='160' class='post-add-body' type='text' placeholder='Your text here'></textarea>
		  	</section>
		  	<footer class='post-add-footer'>
		    	<button class='post-add-btn post-add-btn-close' (click)='close()'>Close</button>
		    	<p class='post-add-char-count'>{{characterCount}}/160</p>
    			<button class='post-add-btn post-add-btn-post'(click)='addPost()'>Post</button>
    		</footer>
		</section>
	`,
	providers: [PostAddService]
})
export class PostAddComponent {

	name;
	postTitle: string;
	postBody: string;
	characterCount: number;

	constructor(private postAddService: PostAddService) {
		this.name = 'Zack';
		this.characterCount = 0;
	}

	close() {
		console.log('closing overlay');
	}

	addPost() {
		this.postAddService.addPost(this.postTitle, this.postBody)
			.subscribe(response => {
				console.log(response);
			});
	}

	updateCharacterCount() {
		this.characterCount = this.postBody.length;
	}

}
