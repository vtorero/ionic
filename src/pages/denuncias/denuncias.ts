import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DenunciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-denuncias',
  templateUrl: 'denuncias.html',
})
export class DenunciasPage {
  public notas:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.notas=[{titulo:'prebabe1',detalle:'detalle del titulo'},
    {titulo:'prebabe2',detalle:'detalle del titulo'},
    {titulo:'prebabe3',detalle:'detalle del titulo'}
  ,{titulo:'prebabe4',detalle:'detalle del titulo'}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DenunciasPage');
  }

}
