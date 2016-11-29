import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Request, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PostDeleteService {
	private host = process.env.API_HOST || 'localhost';
	private port = process.env.API_PORT || '8000'
	private endpoint = process.env.API_POST_DELETE_ENDPOINT || 'post/delete';
	private postDeleteUrl = `http://${this.host}${this.port ? `:${this.port}` : ''}/${this.endpoint}`;
	private postDeleteOptions = new RequestOptions({
		method: RequestMethod.Delete,
		url: this.postDeleteUrl,
		body: {
			_id: ''
		}
	});

	constructor (private http: Http) {}

	deletePost(_id): Observable<any> {
		this.postDeleteOptions.body._id = _id;
		console.log(`About to delete post: ${_id}`)
		const req = new Request(this.postDeleteOptions);
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
