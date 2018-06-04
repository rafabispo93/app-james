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

  public lineChartData:Array<any> = [
    {data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], label: 'Profundidade'},
    {data: [4,4,4,4,4,4,4,4,4,4], label: 'Mínimo'},
    {data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5], label: 'Máximo'}
  ];
  public lineChartLabels:Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public lineChartOptions:any = {
    responsive: true,
    fill: "origin"
  };
  public lineChartColors:Array<any> = [
    { // grey
      // backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      // pointBackgroundColor: 'rgba(148,159,177,1)',
      // pointBorderColor: '#fff',
      // pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // red
      backgroundColor: 'rgba(255, 0, 0,0.2)',
      borderColor: 'rgba(255, 0, 0,1)',
      pointBackgroundColor: 'rgba(255, 0, 0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 0, 0,1)'
    },
    { // green
      backgroundColor: 'rgba(0, 250, 0,0.2)',
      borderColor: 'rgba(0, 250, 0,1)',
      pointBackgroundColor: 'rgba(0, 250, 0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0, 250, 0,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  
  public randomize(value):void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        if (i === 1) {
          _lineChartData[i].data[j] = 4;
        } else if (i === 2) {
          _lineChartData[i].data[j] = 5;
        } else {
          _lineChartData[i].data[j] = value;
        }
      }
    }
    this.lineChartData = _lineChartData;
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
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
    let _lineChartData:Array<any> = [];
    this.data = this.httpClient.get(this.serverIp + '/get/current/compression_value');
    this.data.subscribe(data => {
      this.compressionFreq = data.value;
      // setInterval(() => this.randomize(), 1000);
      this.randomize(data.value);
      // _lineChartData = data.value;
      // this.lineChartData[0].data = _lineChartData;
      this.loadCompression()
      // setInterval(() => this.loadCompression(), 500);
    })
  }

}
