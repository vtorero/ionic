import { Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service';
import {SocialSharing} from '@ionic-native/social-sharing';
import {NotaPage} from '../nota/nota';



/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
  providers:[ApiServiceProvider]
})
export class InicioPage {
  public notas:any;
  public notas2:any;
  public denuncias:any;
  nota: Observable<any>;
  den:Observable<any>;
  items: Array<{id:number,title: string, note: string,image:string,url:string}>;
  items2: Array<{id:number,title: string, note: string,image:string,url:string}>;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ds: ApiServiceProvider,
    private sharing:SocialSharing
    ) 
    { this.notas=[];
      this.notas2=[];
      this.denuncias=[];
      this.items = [];
      this.den = this.ds.getCategoria('denuncia');

      this.den.subscribe(data=> {        
        data.posts.map(post=>{
              this.notas2.push(post);
            });
        //console.log(data.posts[i].thumbnail_images["full"].url);
            
        for(let u = 1; u <7; u++) 
        {
          this.denuncias.push({
            id: data.posts[u].id,
            title: data.posts[u].title_plain.substr(0,80)+'...'.toUpperCase(),
            note: data.posts[u].title,
            image:data.posts[u].thumbnail_images["full"].url,
            url: data.posts[u].url

           
          });
        }

      });

      
      this.nota = this.ds.getRecientes();
      this.nota.subscribe(data => {        
         data.posts.map(post=>{
               this.notas.push(post);
        });
        //data.posts.length
        for(let i = 1; i <7; i++) 
        {
          this.items.push({
            id: data.posts[i].id,
            title: data.posts[i].title_plain.substr(0,80)+'...'.toUpperCase(),
            note: data.posts[i].title,
            image:data.posts[i].thumbnail_images["full"].url,
            url: data.posts[i].url
          });
         
          //console.log(data.posts[i].thumbnail_images["full"].url);
        }
        //console.log(data.posts);
         
        //console.log(this.notas[0].thumbnail_images["full"].url);
        //console.log(this.notas[0].attachments[0]["images"]["full"].url);
        //console.log(this.notas.length);
         //console.log(this.notas);
         //console.log(this.items);
       });
      // this.onNotification();

  }

  gotoNota(id){
    this.navCtrl.push(NotaPage,{notaID:id});
     console.log(id);
  
   }


whatsappshare(wsshare){
this.sharing.shareViaWhatsApp(wsshare.title,wsshare.image,wsshare.url)
.then(()=>{
  console.log(wsshare.title,wsshare.image,wsshare.url);
}).catch((error)=>{
console.log(error);
});
}

facebookshare(wsshare){
  this.sharing.shareViaFacebook(wsshare.title,wsshare.image,wsshare.url)
  .then(()=>{
    console.log(wsshare.title,wsshare.image,wsshare.url);
  }).catch((error)=>{
  console.log(error);
  });
  }


  ionViewDidLoad() {
    //console.log('inicio page esta cargada');
  }

}
