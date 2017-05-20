import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Stockout } from './stockout';

@NgModule({
  declarations: [
    Stockout,
  ],
  imports: [
    IonicPageModule.forChild(Stockout),
  ],
  exports: [
    Stockout
  ]
})
export class StockoutModule {}
