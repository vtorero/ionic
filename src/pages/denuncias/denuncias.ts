import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service';
import {NotaPage} from '../nota/nota';



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
  providers: [ApiServiceProvider]
})
export class DenunciasPage {
  public notas:any;
  public nota: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public ds: ApiServiceProvider) {
    this.notas=[];
    this.nota = this.ds.getCategoria('tecnologia');
    this.nota.subscribe(data => {        
      data.posts.map(post=>{
            this.notas.push(post);
     });
    /* console.log(this.notas);
    this.notas=[{titulo:'prebabe1',detalle:'detalle del titulo'},
    {titulo:'prebabe2',detalle:'detalle del titulo'},
    {titulo:'prebabe3',detalle:'detalle del titulo'}
  ,{titulo:'prebabe4',detalle:'detalle del titulo'}];*/
  });
}
 gotoNota(id){
  this.navCtrl.push(NotaPage,{notaID:id});
   console.log(id);

 }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DenunciasPage');
  }

}
