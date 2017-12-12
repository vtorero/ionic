import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service';
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
  templateUrl: 'perfiles.html',
  providers: [ApiServiceProvider]
 

})
export class PerfilesPage {
    films: Observable<any>;
    public users :any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public ds: ApiServiceProvider
    //public httpClient: HttpClient,
  
   ) {
    this.users=[];
    this.films = this.ds.getProfilesId();
    this.films
    .subscribe(data => {
     // console.log('my data: ', data.data.children);
      data.data.children.map(title=>{
        this.users.push(title.data);
        
      }
      
      );
      //console.log(this.users);
    });

  }
  gotoPlaylist(userID){
  this.navCtrl.push(PlaylistsPage,{userID:userID});
  }
  ionViewDidLoad() {
  //console.log(this.users);
   
   //console.log(this.http.get('https://www.reddit.com/r/gaming/new/.json'));
    //console.log('ionViewDidLoad PerfilesPage');
  }

}
