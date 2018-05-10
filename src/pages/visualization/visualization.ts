import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the VisualizationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualization',
  templateUrl: 'visualization.html',
})
export class VisualizationPage {
  currentRitmo: any = '';
  data: any;
  model_patologies = '';
  patologies = [];
  model_procedures = '';
  responseAluno: any = '';
  user = this.navParams.get("user");
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient, public toastCtrl: ToastController, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    let response;
    this.data = this.httpClient.get(this.navParams.get("serverIp") + '/get/ritmos');
    this.data
    .subscribe(data => {
      for (var count = 0; count < data.length; count++) {
        this.patologies.push({'name': data[count][1], 'value': data[count][2]});
      }
    })
    response = this.httpClient.get(this.navParams.get("serverIp") + '/get/current/ritmo');
    response.subscribe(data => {
      this.currentRitmo = data[0][1];
    });
    this.getAnswer();
  }

  toAnswer() {
    let response;
    response = this.httpClient.post(this.navParams.get("serverIp") + '/send/answer', {'answer':'O tratamento é: '  + this.model_procedures + ' e o ritmo identificado é: ' +  this.model_patologies, 'rythm': this.model_patologies, 'procedure': this.model_procedures});
    response.subscribe(data => {
        let alert = this.toastCtrl.create({
          message: data.msg,
          duration: 3000,
          position: 'bottom'
        });
        alert.present();
    });
  }

  getAnswer() {
    let response;
    response = this.httpClient.get(this.navParams.get("serverIp") + '/get/current/answer');
    response.subscribe(data => {
        this.responseAluno = data.answer;
    });

  }

  setRitmoValue(patology) {
    this.model_patologies = patology;
  }

  checkAnswer() {
    this.viewCtrl.dismiss();
    this.navCtrl.push(VisualizationPage, {
      serverIp: this.navParams.get("serverIp"),
      user: this.user
    });
  }

}
