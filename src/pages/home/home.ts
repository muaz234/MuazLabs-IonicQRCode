import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
scanData : {};
options: BarcodeScannerOptions;
encodeData : string ;
encodedData : {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner ) {

  }

  scan(){
    this.options = {
      prompt: "Scan your barcode"
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
      console.log(barcodeData);
      this.scanData = barcodeData;
    }, (err) => {
      console.log("Error occured :" + err);
    });

  }

  encodeText(){
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData).then((encodedData) => {
      console.log(encodedData);
    }, (err) => {
      console.log("Error occured :" + err);
    });
  }
  



}
