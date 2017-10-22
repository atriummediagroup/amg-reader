import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BlogPost, HttpProvider, PostsResponse, Requests} from '../../providers/http/http';
import {BlogDetailPage} from '../blog-detail/blog-detail';

/**
 * Generated class for the BlogListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-blog-list',
    templateUrl: 'blog-list.html',
})
export class BlogListPage {

    model = {
        nextPage: "",
        posts: ([] as Array<BlogPost>)
    };

    /*--- Initialization ---*/

    constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpProvider) {
    }

    ionViewDidLoad() {
        // Get the post data from the server
        this.http.get(Requests.posts(10)).then(value => {
            console.log(JSON.parse(value.data));
            const data = <PostsResponse>JSON.parse(value.data);
            this.model.nextPage = data.next;
            this.model.posts = data.results
        }).catch(error => {
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
