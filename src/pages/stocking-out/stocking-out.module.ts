import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StockingOut } from './stocking-out';

@NgModule({
  declarations: [
    StockingOut,
  ],
  imports: [
    IonicPageModule.forChild(StockingOut),
  ],
  exports: [
    StockingOut
  ]
})
export class StockingOutModule {}
