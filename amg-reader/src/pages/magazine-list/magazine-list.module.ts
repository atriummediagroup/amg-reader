import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MagazineListPage } from './magazine-list';

@NgModule({
  declarations: [
    MagazineListPage,
  ],
  imports: [
    IonicPageModule.forChild(MagazineListPage),
  ],
})
export class MagazineListPageModule {}
