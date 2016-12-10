import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Request, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


const photoUrls = [
	"http://i.giphy.com/l41lI4bYmcsPJX9Go.gif",
	"http://i.giphy.com/2s0ouek7HJmWQ.gif",
	"http://i.giphy.com/x9DVHBmO750Ji.gif",
	"http://i.giphy.com/9s4TbZ3qNEiNa.gif",
	"http://i.imgur.com/QWkxfrJ.gif",
	"http://i.giphy.com/vV5g3lCOzqAhO.gif",
	"http://i.giphy.com/ayQ99hp01HFN6.gif"
];


@Injectable()
export class PostAddService {
	private host = 'localhost';
	private port = '8000'
	private endpoint = 'post/add';
	private postAddUrl = `http://${this.host}${this.port ? `:${this.port}` : ''}/${this.endpoint}`;
	private postAddOptions = new RequestOptions({
		method: RequestMethod.Post,
		url: this.postAddUrl,
		body: {
			date: '',
			title: '',
			body: '',
			author: {
				sub: '',
				name: '',
				picture: ''
			},
			image: ''
		}
	});

	constructor (private http: Http) {}

	addPost(postData): Observable<any> {
		this.postAddOptions.body.date = Date.now();
		this.postAddOptions.body.title = postData.title;
		this.postAddOptions.body.body = postData.body;
		this.postAddOptions.body.author = postData.author;
		this.postAddOptions.body.image = photoUrls[Math.floor(Math.random() * 7)];
		console.log(`About to add post:`)
		console.log(this.postAddOptions);
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
