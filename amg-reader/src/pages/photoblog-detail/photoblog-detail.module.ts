import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoblogDetailPage } from './photoblog-detail';

@NgModule({
  declarations: [
    PhotoblogDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoblogDetailPage),
  ],
})
export class PhotoblogDetailPageModule {}
