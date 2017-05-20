import { Component } from '@angular/core';
import {  NavParams, ViewController } from 'ionic-angular';
import { ProductService } from '../../services/product.service';

/*
  Generated class for the Createproduct page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-createproduct',
  templateUrl: 'createproduct.html'
})
export class Createproduct {
public product: any = {};
    public isNew = true;

    constructor(private viewCtrl: ViewController,
        private navParams: NavParams,
        private productService: ProductService) {
    }

    ionViewDidLoad() {
        let editProduct = this.navParams.get('product');

        if (editProduct) {
            this.product = editProduct;
            this.isNew = false;
                    }
    }

    save() {

        if (this.isNew) {
            this.productService.add(this.product)
                .catch(console.error.bind(console));
        } else {
            this.productService.update(this.product)
                .catch(console.error.bind(console));
        }

        this.dismiss();
    }

    delete() {
        this.productService.delete(this.product)
            .catch(console.error.bind(console));

        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss(this.product);
    }

}
