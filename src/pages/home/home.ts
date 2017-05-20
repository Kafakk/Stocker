import { Component } from '@angular/core';
import { NavController, ModalController, Platform } from 'ionic-angular';

import {Dashboard} from '../../pages/dashboard/dashboard';
import {Stockout} from '../../pages/stockout/stockout';
import {Stockin} from '../../pages/stockin/stockin';
import {Createproduct} from '../../pages/createproduct/createproduct';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  DashB=Dashboard;
  StockO=Stockout;
  StockI=Stockin;

  constructor(public navCtrl: NavController,
  private platform: Platform,
  private modalCtrl: ModalController,
  private productService: ProductService) {

  }


  ionViewDidLoad() {
        this.platform.ready().then(() => {
            this.productService.initDB();
        });
    }

showDetail(product) {
        let modal = this.modalCtrl.create(Createproduct, { product: product });
        modal.present();
    }

}
