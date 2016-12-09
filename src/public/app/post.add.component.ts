import {Component, Output, EventEmitter, Directive} from '@angular/core';
import {PostAddService} from './post.add.service';
import {FileUploader} from 'ng2-file-upload/ng2-file-upload';

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
		    	<div class='fileUpload post-add-btn post-add-btn-img'>
				    <i class='fa fa-upload' aria-hidden='true' accept='image/gif, image/jpeg, image/png'></i>
				    <input id='post-add-upload' type='file' name='photo' class='post-add-upload' ng2FileSelect [uploader]='uploader' />
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
	@Directive({ selector: '[ng2FileSelect]' });

	name;
	postTitle: string;
	postBody: string;
	characterCount: number;

	public uploader: FileUploader = new FileUploader({url : '/post/add'});

	constructor(private postAddService: PostAddService) {
		this.name = 'Zack';
		this.characterCount = 0;
	}

	close() {
		let isOverlayHidden = true;
		this.onClosedPostMenu.emit(isOverlayHidden);
	}

	addPost() {
		const image = document.getElementById('post-add-upload').files[0];
		this.postAddService.addPost(this.postTitle, this.postBody, image)
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
