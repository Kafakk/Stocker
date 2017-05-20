import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform } from 'ionic-angular';
import { ProductService } from '../../services/product.service';

import { StockingOut } from '../../pages/stocking-out/stocking-out';

/**
 * Generated class for the Stockin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-stockout',
  templateUrl: 'stockout.html',
})
export class Stockout {
public products = [];
items : string[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private productService: ProductService,
        private nav: NavController,
        private platform: Platform,
        private zone: NgZone,
        private modalCtrl: ModalController
  ) {
    
  }



  ionViewDidLoad() {

  this.platform.ready().then(() => {
            this.productService.getAll()
                .then(data => {
                    this.zone.run(() => {
                        this.products = data;
                    });
                })
                .catch(console.error.bind(console));
  });

  console.log('ionViewDidLoad Stockin');
  }

  showDetail(product) {
        let modal = this.modalCtrl.create(StockingOut, { product: product });
        modal.present();
    }

}
