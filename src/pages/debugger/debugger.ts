import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the DebuggerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-debugger',
  templateUrl: 'debugger.html',
})
export class DebuggerPage {
  data : any;
  serverIp = this.navParams.get("serverIp");
  values : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DebuggerPage');
    this.loadDebugger();
  }

  loadDebugger() {
    this.data = this.httpClient.get(this.serverIp + '/get/debug_values');
    this.data.subscribe(data => {
      this.values = Object.keys(data.values);
      this.loadDebugger();
      // console.log(data.values);
    });
  }

}
