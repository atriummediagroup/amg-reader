import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoblogListPage } from './photoblog-list';

@NgModule({
  declarations: [
    PhotoblogListPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoblogListPage),
  ],
})
export class PhotoblogListPageModule {}
