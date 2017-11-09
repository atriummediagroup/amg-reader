import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BlogPost, HttpProvider, PostsResponse, Requests} from '../../providers/http/http';
import {BlogDetailPage} from '../blog-detail/blog-detail';
// import { BlogListPage } from './../blog-list/blog-list';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    model = {
        nextPage: "",
        posts: ([] as Array<BlogPost>),
        title: 'Latest Posts',
    };

    private searchQuery;

    constructor(public navCtrl: NavController, private http: HttpProvider) {
        this.searchQuery = [];

    }

    ionViewDidLoad() {
        // Get latest post from the server
        this.http.get(Requests.posts(6, this.searchQuery, null)).then(value => {
            const data = <PostsResponse>JSON.parse(value.data);
            console.log(data.next);
            // BlogListPage.model.nextPage = data.next;
            this.model.posts = data.results;
        }).catch(error => {
            alert(`Couldn't connect to the server. Please try again later.`);
            console.log(error);
        })
    }

    /*--- UI Functions ---*/

    /* Open a specific post */
    viewPost(post) {
        this.navCtrl.push(BlogDetailPage, {
            post: post
        })
    }

}
