import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service';


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
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ds: ApiServiceProvider) {

      this.notas=[];
      this.nota = this.ds.getRecientes();
      this.nota
      .subscribe(data => {
        // console.log('my data: ', data.data.children);
         data.posts.map(post=>{
           this.notas.push(post);
        }
   
         );
         console.log(this.notas);
       });

  }

  ionViewDidLoad() {
    //console.log('inicio page esta cargada');
  }

}
