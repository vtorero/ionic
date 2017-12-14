import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {InicioPage} from "../pages/inicio/inicio";
import {PerfilesPage} from "../pages/perfiles/perfiles";
import{ContactoPage} from '../pages/contacto/contacto';
import {AcercaPage} from '../pages/acerca/acerca';
import {PlaylistsPage} from '../pages/playlists/playlists';
import {CancionesPage} from '../pages/canciones/canciones';
import {DenunciasPage} from '../pages/denuncias/denuncias';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import {SocialSharing} from '@ionic-native/social-sharing'
@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    PerfilesPage,
    ContactoPage,
    AcercaPage,
    PlaylistsPage,
    CancionesPage,
    DenunciasPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    PerfilesPage,
    ContactoPage,
    AcercaPage,
    PlaylistsPage,
    CancionesPage,
    DenunciasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServiceProvider,
    SocialSharing
    ]
})
export class AppModule {}
