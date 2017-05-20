import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyProduct } from './my-product';

@NgModule({
  declarations: [
    MyProduct,
  ],
  imports: [
    IonicPageModule.forChild(MyProduct),
  ],
  exports: [
    MyProduct
  ]
})
export class MyProductModule {}
