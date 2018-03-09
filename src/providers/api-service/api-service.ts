import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {
  public rutaApi:string;

  constructor(public http: HttpClient) {
//this.rutaApi="https://tiempo26.com/";
  this.rutaApi="/rutaApi/";
    //console.log('Hello ApiServiceProvider Provider');
  }

  getProfilesId(){ 
    return this.http.get('https://www.reddit.com/r/gaming/new/.json');
    
  }

  getCategoria(slug){
    return this.http.get(this.rutaApi+'api/get_category_posts/?slug='+slug);
  }

  getNota(id){
    return this.http.get(this.rutaApi+'?json=get_post&post_id='+ id);
  }

  getRecientes(){
  return this.http.get(this.rutaApi + '?json=get_recent_post');
  }

}
