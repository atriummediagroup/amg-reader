import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MagazineDetailPage } from './magazine-detail';

@NgModule({
  declarations: [
    MagazineDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MagazineDetailPage),
  ],
})
export class MagazineDetailPageModule {}
function newFunction() {
    return MagazineDetailPage;
}
