import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CancionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html',
})
export class CancionesPage {
public playlistID:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.playlistID=this.navParams.get('playlistID');    
    console.log(this.playlistID);
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad CancionesPage');
  }

}
