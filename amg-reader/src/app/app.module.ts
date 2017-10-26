import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {BlogDetailPage} from '../pages/blog-detail/blog-detail';
import {BlogListPage} from '../pages/blog-list/blog-list';
import {CategoryListPage} from '../pages/category-list/category-list';
import {MagazineListPage} from '../pages/magazine-list/magazine-list';
import {PhotoblogDetailPage} from '../pages/photoblog-detail/photoblog-detail';
import {PhotoblogListPage} from '../pages/photoblog-list/photoblog-list';
import {MagazineDetailPage} from '../pages/magazine-detail/magazine-detail';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {PipesModule} from '../pipes/pipes.module';
import {HttpProvider} from '../providers/http/http';
import {HTTP} from '@ionic-native/http';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        BlogDetailPage,
        BlogListPage,
        CategoryListPage,
        MagazineListPage,
        PhotoblogDetailPage,
        PhotoblogListPage,
        MagazineDetailPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        PipesModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        BlogDetailPage,
        BlogListPage,
        CategoryListPage,
        MagazineListPage,
        PhotoblogDetailPage,
        PhotoblogListPage,
    ],
    providers: [
        HTTP,
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        HttpProvider
    ]
})
export class AppModule {
}
