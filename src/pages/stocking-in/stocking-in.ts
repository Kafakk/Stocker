import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProductService } from '../../services/product.service';

/**
 * Generated class for the StockingIn page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-stocking-in',
  templateUrl: 'stocking-in.html',
})
export class StockingIn {

  public product: any = {};
  public isNew = true;
  private Quantity;

  constructor(private viewCtrl: ViewController,
  public navCtrl: NavController, public navParams: NavParams,
  private productService: ProductService) {
  }

  ionViewDidLoad() {

    let editProduct = this.navParams.get('product');
        if (editProduct) {
            this.isNew = false;
            this.product = editProduct;
        }
           console.log('ionViewDidLoad StockingIn');
}


save() {
this.product.quantity = parseInt(this.product.quantity) + parseInt(this.Quantity);

     
            this.productService.update(this.product)
                .catch(console.error.bind(console));
    
     this.dismiss();
    
}


    dismiss() {
        this.viewCtrl.dismiss(this.product);
    }

}