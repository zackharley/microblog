import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
	private host = process.env.API_HOST || 'localhost';
	private port = process.env.API_PORT || '8000'
	private endpoint = process.env.API_POSTS_ENDPOINT || 'posts';
	private postsUrl = `http://${this.host}${this.port ? `:${this.port}` : ''}/${this.endpoint}`;

	constructor (private http: Http) {}

	getPosts(): Observable<any> {
		return this.http.get(this.postsUrl)
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		return res.json().map((post) => {
			let postDate = new Date(post.date);
			post.date = `${monthNames[postDate.getMonth()]} ${postDate.getDate()}, ${postDate.getFullYear()}`;
			post.image = 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/SWRREC0K3A.jpg';
			return post;
		});
	}

	private handleError(error: Response | any) {
		let errorMessage: string;
		if(error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errorMessage = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errorMessage = error.message ? error.message : error.toString();
		}
		console.error(errorMessage);
		return Observable.throw(errorMessage);
	}
}
