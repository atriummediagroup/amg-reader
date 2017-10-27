import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider, Requests } from '../../providers/http/http';
import { BlogListPage } from '../blog-list/blog-list';

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
  category:JSON;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpProvider: HttpProvider) {
    this.httpProvider.get(Requests.categories).then(value => {
      // console.log(JSON.parse(value.data));
      console.log(value.data.results);
      this.categories = value.data.results;     
  }).catch(error => {
      console.log(error);
  });
  
    

  } 
  public goToBlogList(cat:any){
    this.navCtrl.push(BlogListPage,{
      category:cat
    });
  }
}
