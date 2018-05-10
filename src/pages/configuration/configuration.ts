import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery'

/**
 * Generated class for the ConfigurationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuration',
  templateUrl: 'configuration.html',
})
export class ConfigurationPage {
  patologies = [];
  data: any;
  level_number = 1;
  level_qt = [];
  model_patologies = {};
  model_improves = {};
  model_worsens = [];
  model_procedures = [];
  current_rythm_level = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.data = this.httpClient.get(this.navParams.get("serverIp") + '/get/ritmos');
    this.data
    .subscribe(data => {
      for (var count = 0; count < data.length; count++) {
          this.patologies.push({'name': data[count][1], 'value': data[count][2]});
      }
      console.log(this.patologies, "patologies");
    })
  }

  generateLevels() {
    if(this.level_number <= 100){
      if (this.level_qt.length > 0) {
        this.level_qt = [];
      }
      for (var count = 0; count < this.level_number; count++) {
        this.level_qt.push(count);
      }
    } else {
      let alert = this.toastCtrl.create({
        message: 'Insira um valor menor ou igual a 100',
        duration: 3000,
        position: 'bottom'
      });
      alert.present();
    }
  }

  generate() {
    var counter, len, patologies_to_send;
    len = Object.keys(this.model_patologies).length;
    patologies_to_send = [];
    this.current_rythm_level = 0;
    if (len > 0) {
      for (counter = 0; counter < len; counter++) {
          console.log("AQUIII");
          patologies_to_send.push(this.model_patologies[counter]);
      }
      let response;
      response = this.httpClient.post(this.navParams.get("serverIp") + '/send/multiple/ritmos', {'ritmos': patologies_to_send});
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
  }

  nextTask() {
    let response, len;
    len = Object.keys(this.model_patologies).length;
    console.log(len, "LEN");
    if (this.current_rythm_level < len) {
      console.log("Chegou aqui");
      response = this.httpClient.post(this.navParams.get("serverIp") + '/send/ritmo', {'ritmo': parseInt(this.model_patologies[this.current_rythm_level], 10)});
      response.subscribe(data => {
        }, response => {
          if (response.status == 200) {
            console.log(response, "SUCESSo");
            this.current_rythm_level++;
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
      this.current_rythm_level = 0;
    }

  }

}
