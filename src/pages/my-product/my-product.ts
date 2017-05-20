import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ProductService } from '../../services/product.service';

/*
  Generated class for the MyProduct page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-product',
  templateUrl: 'my-product.html'
})
export class MyProduct {
public products: any = {};
items : string[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private productService: ProductService,
        private nav: NavController,
        private zone: NgZone,
        private modalCtrl: ModalController) {

    this.initializeItems();
  }

initializeItems() {
    
            
            this.productService.getAll()
                .then(data => {
                    this.zone.run(() => {
                        this.products = data;
                    });
                })
                .catch(console.error.bind(console));

             
                this.items = ['Pen','Pen Red','Pencil','Max',
                              'e','G20','Tree','Computer',
                              'White board','Marker','ink','Cutter',
                              'Slide'
                ];
       
 
  }



getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


ionViewDidLoad() {


    console.log('ionViewDidLoad MyProductPage');
  }
}
