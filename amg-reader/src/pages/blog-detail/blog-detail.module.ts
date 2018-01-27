import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BlogDetailPage} from './blog-detail';
import {SocialSharing} from '@ionic-native/social-sharing';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
    declarations: [
        BlogDetailPage,
    ],
    imports: [
        IonicPageModule.forChild(BlogDetailPage),
        // SocialSharing
        PipesModule
    ],
})
export class BlogDetailPageModule {}
