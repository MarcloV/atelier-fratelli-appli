import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AccueilPageModule } from '../pages/accueil/accueil.module';
import { AccueilPage } from '../pages/accueil/accueil';
import { ComptePageModule } from '../pages/compte/compte.module';
import { HistoriquePageModule } from '../pages/historique/historique.module';
import { InscriptionPageModule } from '../pages/inscription/inscription.module';
import { SalePageModule } from '../pages/sale/sale.module';
import { SucrePageModule } from '../pages/sucre/sucre.module';
import { ComptePage } from '../pages/compte/compte';
import { HistoriquePage } from '../pages/historique/historique';
import { InscriptionPage } from '../pages/inscription/inscription';
import { SalePage } from '../pages/sale/sale';
import { SucrePage } from '../pages/sucre/sucre';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { CommandeFormGeneratorProvider } from '../providers/commande-form-generator/commande-form-generator';
import { FraisFormGeneratorProvider } from '../providers/frais-form-generator/frais-form-generator';
import { PizzaFormGeneratorProvider } from '../providers/pizza-form-generator/pizza-form-generator';
import { LegumesFormGeneratorProvider } from '../providers/legumes-form-generator/legumes-form-generator';
import * as firebase from 'firebase';
import { DessertFormGeneratorProvider } from '../providers/dessert-form-generator/dessert-form-generator';
import { TiramisuFormGeneratorProvider } from '../providers/tiramisu-form-generator/tiramisu-form-generator';

import { AngularFirestoreModule } from '../../node_modules/angularfire2/firestore';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfilPage } from '../pages/profil/profil';
import { ProfilPageModule } from '../pages/profil/profil.module';
import { LaboPageModule } from '../pages/labo/labo.module';
import { LaboPage } from '../pages/labo/labo';
import { HomelaboPageModule } from '../pages/homelabo/homelabo.module';
import { HomelaboPage } from '../pages/homelabo/homelabo';
import { ClientsPageModule } from '../pages/clients/clients.module';
import { ClientsPage } from '../pages/clients/clients';
import { HistolaboPage } from '../pages/histolabo/histolabo';
import { HistolaboPageModule } from '../pages/histolabo/histolabo.module';

import { CommandePage } from '../pages/commande/commande';
import { CommandePageModule } from '../pages/commande/commande.module';
import { CommServiceProvider } from '../providers/comm-service/comm-service';



var config = {
  apiKey: "AIzaSyDcJjD_oUNSawRzp2Cw4V_ENIThWKrjeGI",
  authDomain: "atelier-fratelli-app-9e571.firebaseapp.com",
  databaseURL: "https://atelier-fratelli-app-9e571.firebaseio.com",
  projectId: "atelier-fratelli-app-9e571",
  storageBucket: "atelier-fratelli-app-9e571.appspot.com",
  messagingSenderId: "26429475180"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AccueilPageModule,
    ComptePageModule,
    HistoriquePageModule,
    InscriptionPageModule,
    SalePageModule,
    SucrePageModule,
    ProfilPageModule,
    LaboPageModule,
    HomelaboPageModule,
    ClientsPageModule,
    HistolaboPageModule,
    CommandePageModule,
    HttpModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
 CommonModule,
 ReactiveFormsModule,
 AngularFirestoreModule.enablePersistence()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccueilPage,
    ComptePage,
    HistoriquePage,
    InscriptionPage,
    SalePage,
    SucrePage,
    ProfilPage,
    LaboPage,
    HomelaboPage,
    ClientsPage,
    HistolaboPage,
    CommandePage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
FraisFormGeneratorProvider,
PizzaFormGeneratorProvider,
CommandeFormGeneratorProvider,
LegumesFormGeneratorProvider,
    DessertFormGeneratorProvider,
    TiramisuFormGeneratorProvider,
    CommServiceProvider,
 
 


  ]
})
export class AppModule {}
