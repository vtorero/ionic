import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {InicioPage} from '../pages/inicio/inicio';
import {PerfilesPage} from '../pages/perfiles/perfiles';
import {ContactoPage} from '../pages/contacto/contacto';
import {AcercaPage} from '../pages/acerca/acerca';
import { DenunciasPage } from '../pages/denuncias/denuncias';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  public rootPage: any;
  public pages:Array<{titulo:string,component:any,icon:string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.rootPage=InicioPage;
    this.pages=[
      {titulo:'Inicio',component:InicioPage,icon:'home'},
      {titulo:'Denuncia',component:DenunciasPage,icon:'ios-list-box-outline'},
      {titulo:'Política',component:PerfilesPage,icon:'md-briefcase'},
      {titulo:'Opinión',component:PerfilesPage,icon:'ios-text-outline'},
      {titulo:'Actualidad',component:PerfilesPage,icon:'ios-megaphone-outline'},
      {titulo:'Economía',component:PerfilesPage,icon:'ios-pulse-outline'},
      {titulo:'Ciencia',component:PerfilesPage,icon:'md-globe'},
      {titulo:'Tech',component:PerfilesPage,icon:'md-laptop'},
      {titulo:'Contacto',component:ContactoPage,icon:'mail'},
      {titulo:'Acerca',component:AcercaPage,icon:'information-circle'},
    ]
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page) {
    this.nav.setRoot(page);
  }
}

