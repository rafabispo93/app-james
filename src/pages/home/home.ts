import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {ModalLoginPage} from '../modal-login/modal-login';
import {VisualizationPage} from '../visualization/visualization';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  serverIP = 'http://10.220.17.3:5000';
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openModal(login) {
   let myModal = this.modalCtrl.create(ModalLoginPage, {'login':login});
   myModal.present();
  }

  navigateToVisualizationPage(username) {
    this.navCtrl.push(VisualizationPage, {
      serverIp: this.serverIP,
      user: username
    });
  }

}
