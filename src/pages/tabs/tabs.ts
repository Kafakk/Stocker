import { Component } from '@angular/core';


import { Account } from '../account/account';
import { MyProduct } from '../my-product/my-product';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyProduct;
  tab3Root = Account;

  constructor() {

  }
}
