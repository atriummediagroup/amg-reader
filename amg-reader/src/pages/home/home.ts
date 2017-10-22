import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpProvider, Requests} from '../../providers/http/http';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, private http: HttpProvider) {
        this.http.get(Requests.posts(10)).then(value => {
            console.log(JSON.parse(value.data));
        }).catch(error => {
            console.log(error);
        })
    }

}
