import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ManagementRitmosPage} from '../management-ritmos/management-ritmos';

/**
 * Generated class for the ManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-management',
  templateUrl: 'management.html',
})
export class ManagementPage {
  managementRitmosPage = ManagementRitmosPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagementPage');
  }

  navigateToManagementRitmosPage() {
    this.navCtrl.push(ManagementRitmosPage, {
      serverIp: this.navParams.get("serverIp")
    });
  }

}
