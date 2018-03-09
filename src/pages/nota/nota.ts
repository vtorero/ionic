import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service';
import {SocialSharing} from '@ionic-native/social-sharing';

/**
 * Generated class for the NotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nota',
  templateUrl: 'nota.html',
})
export class NotaPage {
  public notaID:number;
  public noticia:any;
  public nota: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public ds: ApiServiceProvider, private sharing:SocialSharing) {
   
  }

  whatsappshare(wsshare){
    this.sharing.shareViaWhatsApp(wsshare.title,wsshare.image,wsshare.url)
    .then(()=>{
      console.log("mensaje enviado");
    }).catch((error)=>{
    console.log(error);
    });
    }

    facebookshare(wsshare){
      this.sharing.shareViaFacebook(null,wsshare.image,wsshare.url)
      .then(()=>{
        console.log("mensaje enviado");
      }).catch((error)=>{
      console.log(error);
      });
      }


  ngOnInit(){
    this.notaID=this.navParams.get('notaID');
    this.noticia=[];
    this.nota = this.ds.getNota(this.notaID);
    this.nota
    .subscribe(data => {
      //console.log('my data: ', data);
         this.noticia.push(data.post);
        }
      );
      //console.log(this.users);
    

 

    console.log(this.noticia);

  }
  ionViewDidLoad() {
   // console.log('ionViewDidLoad NotaPage');
  }

}
