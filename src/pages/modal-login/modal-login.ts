import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {MainPage} from '../main/main';

/**
 * Generated class for the ModalLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-login',
  templateUrl: 'modal-login.html',
})
export class ModalLoginPage {
  password;
  mainPage = MainPage;
  username = this.navParams.get('login');
  data: any;
  serverIP = 'http://10.220.17.34:5000';
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public httpClient: HttpClient, public toastCtrl: ToastController) {
    console.log(this.username);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalLoginPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  login() {
    if (this.username !== undefined && this.password !== undefined) {
      this.data = this.httpClient.post(this.serverIP + '/login', {'username': this.username, 'password': this.password}).subscribe(data => {
        }, response => {
          if (response.status == 200) {
            this.navCtrl.push(MainPage, {
              serverIp: this.serverIP,
              user: this.username
            });
            this.closeModal();
          }else {
            let alert = this.toastCtrl.create({
              message: response.error,
              duration: 3000,
              position: 'bottom'
            });
            alert.present();
          }
        });
    } else {
        let alert = this.toastCtrl.create({
          message: 'Os campos de login e senha devem ser preenchidos.',
          duration: 3000,
          position: 'bottom'
        });
        alert.present();
    }
  }

}
