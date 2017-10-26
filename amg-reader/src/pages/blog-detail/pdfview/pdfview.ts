import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { FileOpener } from '@ionic-native/file-opener';


/**
 * Generated class for the PdfviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pdfview',
  templateUrl: 'pdfview.html',
})
export class PdfviewPage {

  options : DocumentViewerOptions = {
    title: 'My Pdf'
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, private documentViewer: DocumentViewer, private fileOpener: FileOpener) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfviewPage');
  }

  public openFile(){
    this.documentViewer.viewDocument('assets/pdf/checklist.pdf', 'application/pdf', this.options)
    // this.fileOpener.open('www/assets/pdf/checklist.pdf', 'application/pdf')
    // .then(() => console.log('File is opened'))
    // .catch(e => console.log('Error openening file', e));
  } 

}
