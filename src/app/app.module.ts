import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { MapPage } from '../pages/map/map';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ContentListPage } from '../pages/content-list/content-list';
import { ContentDetailPage } from '../pages/content-detail/content-detail';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MapPage,
    HomePage,
    TabsPage,
    ContentListPage,
    ContentDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,
     {
      urlApi: 'http://defibrillatoricomunedilecce1234.api.openrecordz.com/service/v1',
     })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MapPage,
    HomePage,
    TabsPage,
    ContentListPage,
    ContentDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
