import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoblogDetailPage } from './photoblog-detail';
import {SocialSharing} from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    PhotoblogDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoblogDetailPage),
      SocialSharing
  ],
})
export class PhotoblogDetailPageModule {}
