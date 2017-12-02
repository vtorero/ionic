import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlaylistsPage} from '../playlists/playlists';



/**
 * Generated class for the PerfilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html'
 

})
export class PerfilesPage {
    films: Observable<any>;
    public users :any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public httpClient: HttpClient,
  
   ) {
    this.users=[];
    this.films = this.httpClient.get('https://www.reddit.com/r/gaming/new/.json');
    this.films
    .subscribe(data => {
     // console.log('my data: ', data.data.children);
      data.data.children.map(title=>{
        this.users.push(title.data);
        
      }

      );
      console.log(this.users);
    });

  }
  gotoPlaylist(userID){
  this.navCtrl.push(PlaylistsPage,{userID:userID});
  }
  ionViewDidLoad() {
   // this.ds.getProfilesId();
   //console.log(this.http.get('https://www.reddit.com/r/gaming/new/.json'));
    //console.log('ionViewDidLoad PerfilesPage');
  }

}
