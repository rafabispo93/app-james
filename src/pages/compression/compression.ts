import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the CompressionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compression',
  templateUrl: 'compression.html',
})
export class CompressionPage {
  compressionFreq : number = 0;
  data : any;
  serverIp = this.navParams.get("serverIp");
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompressionPage');
  }
  ionViewDidEnter() {
    this.loadCompression();
  }
  /**
   * Load the cardiac compression values continuously from the server
   */
  loadCompression() {
    this.data = this.httpClient.get(this.serverIp + '/get/current/compression_value');
    this.data.subscribe(data => {
      this.compressionFreq = data.value;
      setInterval(this.loadCompression(), 500);
    })
  }

}
