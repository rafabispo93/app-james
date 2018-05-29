import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ConfigurationPage} from '../configuration/configuration';
import {ManualPage} from '../manual/manual';
import {ManagementPage} from '../management/management';
import {VisualizationPage} from '../visualization/visualization';
import {CompressionPage} from '../compression/compression';
import {DebuggerPage} from '../debugger/debugger';
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  configurationPage = ConfigurationPage;
  manualPage = ManualPage;
  managementPage = ManagementPage;
  compressionPage = CompressionPage;
  serverIp = this.navParams.get("serverIp");
  user = this.navParams.get("user");
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  navigateToAutomaticPage() {
    this.navCtrl.push(ConfigurationPage, {
      serverIp: this.serverIp
    });
  }
  navigateToManualPage() {
    this.navCtrl.push(ManualPage, {
      serverIp: this.serverIp
    });
  }
  navigateToManagementPage() {
    this.navCtrl.push(ManagementPage, {
      serverIp: this.serverIp
    });
  }
  navigateToVisualizationPage() {
    this.navCtrl.push(VisualizationPage, {
      serverIp: this.serverIp,
      user: this.user
    });
  }

  navigateToCompressionPage() {
    this.navCtrl.push(CompressionPage, {
      serverIp: this.serverIp,
      user: this.user
    });
  }

  navigateToDebuggerPage() {
    this.navCtrl.push(DebuggerPage, {
      serverIp: this.serverIp,
      user: this.user
    });
  }

}
