import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ManagementRitmosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-management-ritmos',
  templateUrl: 'management-ritmos.html',
})
export class ManagementRitmosPage {
  data: any;
  patologies = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {

  }

  ionViewDidLoad() {
    this.data = this.httpClient.get(this.navParams.get("serverIp") + '/get/ritmos');
    this.data
    .subscribe(data => {
      for (var count = 0; count < data.length; count++) {
        this.patologies.push(data[count]);
      }
    })
    console.log('ionViewDidLoad ManagementRitmosPage');
  }

}
