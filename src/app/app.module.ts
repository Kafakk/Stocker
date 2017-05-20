import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProductService } from '../services/product.service';

import { Account } from '../pages/account/account';
import { Dashboard } from '../pages/dashboard/dashboard';
import { MyProduct } from '../pages/my-product/my-product';
import { Createproduct } from '../pages/createproduct/createproduct';
import { Stockin } from '../pages/stockin/stockin';
import { Stockout } from '../pages/stockout/stockout';
import { StockingIn } from '../pages/stocking-in/stocking-in';
import { StockingOut } from '../pages/stocking-out/stocking-out';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    MyProduct,
    Account,
    Dashboard,
    Createproduct,
    Stockin,
    Stockout,
    StockingIn,
    StockingOut
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    MyProduct,
    Account,
    Dashboard,
    Createproduct,
    Stockin,
    Stockout,
    StockingIn,
    StockingOut
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    ,ProductService
  ]
})
export class AppModule {}
