import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider, Requests } from '../../providers/http/http';
import {MagazineDetailPage} from '../magazine-detail/magazine-detail';
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
  magazines:Array<JSON>

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpProvider: HttpProvider) {
    this.httpProvider.get(Requests.issues).then(value => {
      // console.log(JSON.parse(value.data));
      console.log(value.data.results);
      this.magazines = value.data.results;     
  }).catch(error => {
      console.log(error);
  })
  }

      /* Open a specific post */
  viewMag(magazine) {
      this.navCtrl.push(MagazineDetailPage, {
           magazine: magazine
       })
    }

}
