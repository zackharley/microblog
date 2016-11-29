import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Request, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PostAddService {
	private host = process.env.API_HOST || 'localhost';
	private port = process.env.API_PORT || '8000'
	private endpoint = process.env.API_POST_ADD_ENDPOINT || 'post/add';
	private postAddUrl = `http://${this.host}${this.port ? `:${this.port}` : ''}/${this.endpoint}`;
	private postAddOptions = new RequestOptions({
		method: RequestMethod.Post,
		url: this.postAddUrl,
		body: {
			date: '',
			title: '',
			body: '',
			author: 'Zack'
		}
	});

	constructor (private http: Http) {}

	addPost(title: string, body: string): Observable<any> {
		this.postAddOptions.body.date = Date.now();
		this.postAddOptions.body.title = title;
		this.postAddOptions.body.body = body;
		console.log(`About to add post: ${this.postAddOptions}`)
		const req = new Request(this.postAddOptions);
		return this.http.request(req)
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		return res.json();
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
