import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider, Requests } from '../../providers/http/http';
/**
 * Generated class for the CategoryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html',
})
export class CategoryListPage {
  categories:Array<JSON>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpProvider: HttpProvider) {
    
  }

 /*  */
  printCategories(categories){
    categories.forEach(element => {
      console.log(element.title)
    });
  };
  
// If development = true
  ionViewDidLoad() {
    this.httpProvider.get(Requests.categories).then(value=>{this.printCategories(value.data.results);
    this.categories=value.data.results});
    
  }

  // // If development = false
  // ionViewDidLoad() {
  //   this.httpProvider.get(Requests.categories).then(value=>{;
  //   this.categories=value.results});
    
  // }


  }
