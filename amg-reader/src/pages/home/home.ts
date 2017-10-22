import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpProvider, Requests} from '../../providers/http/http';
import {BlogListPage} from '../blog-list/blog-list';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {
        this.navCtrl.setRoot(BlogListPage);
    }

}
