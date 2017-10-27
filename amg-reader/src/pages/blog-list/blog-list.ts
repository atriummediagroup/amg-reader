import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
category: String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category = this.navParams.get('category');
    console.log('category:' + this.category);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogListPage');
  }

}
