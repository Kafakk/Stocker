import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Stockin } from './stockin';

@NgModule({
  declarations: [
    Stockin,
  ],
  imports: [
    IonicPageModule.forChild(Stockin),
  ],
  exports: [
    Stockin
  ]
})
export class StockinModule {}
