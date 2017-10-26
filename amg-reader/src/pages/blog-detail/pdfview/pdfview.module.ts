import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PdfviewPage } from './pdfview';

@NgModule({
  declarations: [
    PdfviewPage,
  ],
  imports: [
    IonicPageModule.forChild(PdfviewPage),
  ],
})
export class PdfviewPageModule {}
