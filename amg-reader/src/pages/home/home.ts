import { IssuesResponse } from './../../providers/http/http';
import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {HttpProvider, Issue, BlogPost, PhotoPost, PhotoPostsResponse, PostsResponse, Requests} from '../../providers/http/http';
import {BlogDetailPage} from '../blog-detail/blog-detail';
import {PhotoblogDetailPage} from '../photoblog-detail/photoblog-detail';
// import {MagazineDetailP}


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    model = {
        nextPage: "",
        blogPosts: ([] as Array<BlogPost>),
        photoPosts: ([] as Array<PhotoPost>),
        issues: ([] as Array<Issue>),
        title: 'Latest Posts',
    };

    private searchQuery;

    constructor(public navCtrl: NavController, private http: HttpProvider) {
        this.searchQuery = [];

    }

    ionViewDidLoad() {
        // console.log('HERE');
        // Get latest post from the server
        this.http.get(Requests.posts(4, this.searchQuery, null)).then(value => {
            const data = <PostsResponse>JSON.parse(value.data);
            this.model.blogPosts = data.results;
        }).catch(error => {
            alert(`Couldn't connect to the server. Please try again later.`);
            console.log(error);
        })

        this.http.get(Requests.photoPosts(4, this.searchQuery, null)).then(value => {
            const data = <PhotoPostsResponse>JSON.parse(value.data);
            this.model.photoPosts = data.results;
        }).catch(error => {
            alert(`Couldn't connect to the server. Please try again later.`);
            console.log(error);
        })

        this.http.get(Requests.issues(1, this.searchQuery, null)).then(value=> {
            const data = <IssuesResponse>JSON.parse(value.data);
            this.model.issues = data.results;
        }).catch(error=> {
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
    /* Open a specific post */
    viewPhotoPost(post) {
        this.navCtrl.push(PhotoblogDetailPage, {
            post: post
        })
    }
    
    // viewIssue(issue) {
    //     this.navCtrl.push()
    // }

}
