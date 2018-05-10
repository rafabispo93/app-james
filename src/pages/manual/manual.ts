import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the ManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manual',
  templateUrl: 'manual.html',
})
export class ManualPage {
  frequence = 30;
  warmth: number = 200;
  patologies = [];
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient, public toastCtrl: ToastController) {
  }

  onChange(ev: any) {
    console.log('Changed', ev);
  }

  ionViewDidLoad() {
    this.data = this.httpClient.get(this.navParams.get("serverIp") + '/get/ritmos');
    this.data
    .subscribe(data => {
      for (var count = 0; count < data.length; count++) {
        this.patologies.push({'name': data[count][1], 'value': data[count][2]});
      }
    });
    console.log('ionViewDidLoad ManualPage');
  }

  sendRitmoValue(value) {
    console.log(value);
    let response;
    response = this.httpClient.post(this.navParams.get("serverIp") + '/send/ritmo', {'ritmo': parseInt(value, 10)});
    response.subscribe(data => {
      }, response => {
        if (response.status == 200) {
          console.log(response, "SUCESSo");
        }else {
          let alert = this.toastCtrl.create({
            message: response.error,
            duration: 3000,
            position: 'bottom'
          });
          alert.present();
        }
      });
  }

  getFrequence() {
    return this.frequence;
  }

  setFrequence(value) {
    this.frequence = value;
  }

  increaseFrequence() {
    if (this.getFrequence() + 1 <= 200) {
      this.setFrequence(this.getFrequence() + 1);
    } else {
      this.setFrequence(30);
    }
  }

  decreaseFrequence() {
    if (this.getFrequence() - 1 >= 30) {
      this.setFrequence(this.getFrequence() - 1);
    } else {
      this.setFrequence(200);
    }
  }

  increaseFrequenceQuickly() {
    if (this.getFrequence() + 10 <= 200) {
      this.setFrequence(this.getFrequence() + 10);
    } else {
      this.setFrequence(30);
    }
  }

  decreaseFrequenceQuickly() {
    if (this.getFrequence() - 10 >= 30) {
      this.setFrequence(this.getFrequence() - 10);
    } else {
      this.setFrequence(200);
    }
  }

}
