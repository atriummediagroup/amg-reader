import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MagazineIssueProvider} from '../../providers/magazine-issue/magazine-issue';
import {HttpProvider, Issue, IssuesResponse, Requests} from '../../providers/http/http';

/**
 * Generated class for the MagazineListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-magazine-list',
    templateUrl: 'magazine-list.html',
})

export class MagazineListPage {
    model = {
        nextPage: "",
        issues: ([] as Array<Issue>),
        title: 'Latest Posts'
    };


    constructor(public navCtrl: NavController, public navParams: NavParams,
                private magazine: MagazineIssueProvider, private http: HttpProvider) {
    }


    ionViewDidLoad() {
        console.log(localStorage);
        // Get the post data from the server
        this.http.get(Requests.issues(10, [], null)).then(value => {
            const data = <IssuesResponse>JSON.parse(value.data);
            this.model.nextPage = data.next;
            this.model.issues = data.results;
        }).catch(error => {
            alert(`Couldn't connect to the server. Please try again later.`);
            console.log(error);
        })
    }


    viewIssue(issue: Issue) {
        this.magazine.loadMagazine(issue);
    }

    /* Load the next 'x' blog posts */
    loadNextPosts(infiniteScroll) {
        this.http.get(Requests.issues(5, [], this.model.nextPage)).then(value => {
            const data = <IssuesResponse>JSON.parse(value.data);
            this.model.nextPage = data.next;
            this.model.issues = this.model.issues.concat(data.results);
            infiniteScroll.complete();
        }).catch(error => {
            infiniteScroll.complete();
            alert(`Couldn't connect to the server. Please try again later.`);
            console.log(error);
        })
    }

}
