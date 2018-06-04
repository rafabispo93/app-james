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
  pageLoaded: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    this.pageLoaded = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DebuggerPage');
    this.loadDebugger();
  }

  loadDebugger() {
    this.data = this.httpClient.get(this.serverIp + '/get/debug_values');
    let length;
    this.data.subscribe(data => {
      length = Object.keys(data.values).length;
      let auxArray:Array<any> = new Array(length);
      for(let counter = 0; counter < length; counter++){
        auxArray[counter] = data.values[counter];
      }
      this.values = auxArray;
      if (this.pageLoaded === true) {
        this.loadDebugger();
      }
    });
  }

}
