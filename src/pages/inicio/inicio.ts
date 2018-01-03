import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service';
import {SocialSharing} from '@ionic-native/social-sharing';



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
  nota: Observable<any>;
  public notas :any;
  items: Array<{id:number,title: string, note: string,image:string,url:string}>;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ds: ApiServiceProvider,
    private sharing:SocialSharing) {
      this.notas=[];
      this.items = [];
      this.nota = this.ds.getRecientes();
      this.nota.subscribe(data => {        
         data.posts.map(post=>{
               this.notas.push(post);
        });
        //data.posts.length
        for(let i = 0; i <4; i++) 
        {
          this.items.push({
            id: data.posts[i].id,
            title: data.posts[i].title,
            note: data.posts[i].title,
            image:data.posts[i].thumbnail_images["full"].url,
            url: data.posts[i].url
          });
         
          //console.log(data.posts[i].thumbnail_images["full"].url);
        }
        //console.log(data.posts[7]);
         
        //console.log(this.notas[0].thumbnail_images["full"].url);
        //console.log(this.notas[0].attachments[0]["images"]["full"].url);
        //console.log(this.notas.length);
         //console.log(this.notas);
         console.log(this.items);
       });

  }

whatsappshare(wsshare){
this.sharing.shareViaWhatsApp(wsshare.title,wsshare.image,wsshare.url)
.then(()=>{
  console.log("mensaje enviado");
}).catch((error)=>{
console.log(error);
});
}

  ionViewDidLoad() {
    //console.log('inicio page esta cargada');
  }

}
