import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Createproduct } from './createproduct';

@NgModule({
  declarations: [
    Createproduct,
  ],
  imports: [
    IonicPageModule.forChild(Createproduct),
  ],
  exports: [
    Createproduct
  ]
})
export class CreateproductModule {}
