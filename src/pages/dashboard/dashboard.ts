import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductService } from '../../services/product.service';

/*
  Generated class for the Dashboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class Dashboard {

itemsOut  = [];
highStock = [];
lowStock  = [];
public products = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private productService: ProductService,
  private zone: NgZone
  ) {

this.initializeItems();

  }

initializeItems() {


this.productService.getLowStock()
.then(data => {
  this.zone.run(()=> {
    this.products = data;
  });
})
.catch(console.error.bind(console));


 
    this.highStock = [{name: 'Radio',quantity: 21},{name:'Pen Red',quantity: 10},
                      {name: 'Gun',quantity: 10}];

    this.lowStock = [{name: 'Pen',quantity: 1},{name: 'Pencil',quantity:2},
                     {name: 'G20',quantity: 2}];
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
