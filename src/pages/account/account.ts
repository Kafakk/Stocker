import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Account page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class Account {

private session = "Log Out";
private isLogin = false;
private stockname = "My room";
private owner = "Butcher";
private username = "butcherkk";
private email = "butcherkk@mail.com";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

this.checkSession();
  }
  

  checkSession(){

if(!this.isLogin){
  this.session="Log Out";
  
}

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Account');
  }

}
