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
this.rutaApi="http://107.190.129.66/~cualesmi/";
//  this.rutaApi="/rutaApi/";
    //console.log('Hello ApiServiceProvider Provider');
  }

  getProfilesId(){ 
    return this.http.get('https://www.reddit.com/r/gaming/new/.json');
    
  }

  getRecientes(){
  return this.http.get(this.rutaApi + '?json=get_recent_post');
  }

}
