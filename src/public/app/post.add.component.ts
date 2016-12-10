import {Component, Output, EventEmitter, Input} from '@angular/core';
import {PostAddService} from './post.add.service';

@Component({
	selector: 'post-add',
	template: `
		<section *ngIf='credentials' class='post-add-wrapper'>
			<header class='post-add-header'>
		  		<p class='post-add-as'>Posting as {{credentials.user.name}}</p>
		  	</header>
		  	<section class='post-add-fields'>
		  		<input [(ngModel)]='postTitle' class='post-add-title' type='text' placeholder='Title'>
		  		<textarea [(ngModel)]='postBody' (input)='updateCharacterCount()' maxlength='160' class='post-add-body' type='text' placeholder='Your text here'></textarea>
		  	</section>
		  	<footer class='post-add-footer'>
		    	<button class='post-add-btn post-add-btn-close' (click)='close()'>Close</button>
		    	<p class='post-add-char-count'>{{characterCount}}/160</p>
		    	<div class='fileUpload post-add-btn post-add-btn-img'>
				    <i class='fa fa-upload' aria-hidden='true' accept='image/gif, image/jpeg, image/png'></i>
				    <input id='post-add-upload' type='file' name='photo' class='post-add-upload' />
				</div>
    			<button class='post-add-btn post-add-btn-post' (click)='addPost()'>Post</button>
    		</footer>
		</section>
	`,
	providers: [PostAddService]
})
export class PostAddComponent {

	@Output() onClosedPostMenu = new EventEmitter<boolean>();
	@Output() onPostAdded = new EventEmitter<boolean>();
	@Input() credentials;

	postTitle: string;
	postBody: string;
	characterCount: number;

	constructor(private postAddService: PostAddService) {
		this.characterCount = 0;
	}

	close() {
		let isOverlayHidden = true;
		this.onClosedPostMenu.emit(isOverlayHidden);
	}

	addPost() {
		const image = document.getElementById('post-add-upload').files[0];

		const postData = {
			title: this.postTitle,
			author: this.credentials.user,
			body: this.postBody
		};

		this.postAddService.addPost(postData)
			.subscribe(response => {
				console.log(response);
				this.close();
				this.onPostAdded.emit(true);
			});
	}

	updateCharacterCount() {
		this.characterCount = this.postBody.length;
	}

}
