import { Component } from '@angular/core';
import {PostsService} from "./posts.service";
import { Post } from "./post"


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    posts: Post[];
    constructor(private postsService: PostsService){
    }

    ngOnInit() {
        this.postsService.fetchAll().subscribe((posts) => {
            this.posts = posts;
            console.log(posts);
        });
    }


}
