import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CancionesPage} from '../canciones/canciones';

/**
 * Generated class for the PlaylistsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playlists',
  templateUrl: 'playlists.html',
})
export class PlaylistsPage {
  public userID:number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    
    this.userID=this.navParams.get('userID');
    console.log(this.userID);
  }
  goToCanciones(playlisId){
    this.navCtrl.push(CancionesPage,{playlistID:playlisId})
    //console.log(this.userID);
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad PlaylistsPage');
  }

}
