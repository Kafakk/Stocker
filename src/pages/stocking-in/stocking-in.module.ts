import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StockingIn } from './stocking-in';

@NgModule({
  declarations: [
    StockingIn,
  ],
  imports: [
    IonicPageModule.forChild(StockingIn),
  ],
  exports: [
    StockingIn
  ]
})
export class StockingInModule {}
