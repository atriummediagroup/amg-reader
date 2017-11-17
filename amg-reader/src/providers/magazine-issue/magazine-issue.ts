import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {FileTransfer, FileTransferObject} from '@ionic-native/file-transfer';
import {DocumentViewer, DocumentViewerOptions} from '@ionic-native/document-viewer';
import {Issue} from '../../providers/http/http';
import {Platform} from 'ionic-angular';
import {SpinnerDialog} from '@ionic-native/spinner-dialog';

declare let cordova: any;

/*
 Generated class for the MagazineIssueProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class MagazineIssueProvider {

    private settings = {
        isLive: false,
        downloadDirectory: '',
    };

    constructor(private transfer: FileTransfer, private document: DocumentViewer, private platform: Platform,
                    private spinner: SpinnerDialog) {
        this.platform.ready().then((readySource) => {
            this.settings.isLive = true;
            this.settings.downloadDirectory = cordova.file.dataDirectory + 'pdfs/';
            console.log('download directory:')
            console.log(this.settings.downloadDirectory);
        });
    }

    loadMagazine(issue: Issue) {
        this.spinner.show('Downloading...');
        const fileLocation = localStorage.getItem(issue.pdf_url_link);
        console.log('file location: ')
        console.log(fileLocation)
        if (fileLocation) {
            console.log('file location found!')
            const options: DocumentViewerOptions = {
                title: issue.title
            };
            this.document.viewDocument(fileLocation, 'application/pdf', options)
            this.spinner.hide();
        } else {
            // The download function will call load magazine again, so no callback required
            console.log('downloadMagazine()')
            this.downloadMagazine(issue);
        }
    }

    private downloadMagazine(issue: Issue) {
        const fileTransfer: FileTransferObject = this.transfer.create();
        const url = issue.pdf_url_link;
        console.log('url:')
        console.log(url);

        if (this.settings.isLive) {
            this.settings.downloadDirectory = cordova.file.dataDirectory + 'pdfs/';
            console.log('download directory 2:')
            console.log(this.settings.downloadDirectory);
            fileTransfer.download(url, this.settings.downloadDirectory + issue.slug).then((entry) => {
                localStorage.setItem(issue.pdf_url_link, entry.toURL());
                console.log('finished downloading magazine')
                this.loadMagazine(issue)
                console.log('loading magazine')
            }, (error) => {
                alert(`Couldn't connect to the server. Please try again later.`);
                console.log(error)
            });
        } else {
            console.log("platform wasn't ready so here we go again");
            this.platform.ready().then((readySource) => {
                this.settings.isLive = true;
                this.settings.downloadDirectory = cordova.file.dataDirectory + '/pdfs/';
                this.downloadMagazine(issue);
            });
        }
    }

}
