import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import { Post } from "./post"
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class PostsService {
    posts: Post[];
    constructor(private http: Http) {}

    fetchAll() : Observable<Post[]> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts').map((response: Response) => {
            this.posts = response.json() as Post[];
            return this.posts;
        });
    }

}
