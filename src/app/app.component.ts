import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 
import { HomePage } from '../pages/home/home';
import { AccueilPage } from '../pages/accueil/accueil';
import { ComptePage } from '../pages/compte/compte';
import { SalePage } from '../pages/sale/sale';
import { SucrePage } from '../pages/sucre/sucre';
import { HistoriquePage } from '../pages/historique/historique';
import * as firebase from 'firebase';
import { InscriptionPage } from '../pages/inscription/inscription';
import { ClientsPage } from '../pages/clients/clients';
import { CommandePage } from '../pages/commande/commande';
import { HistolaboPage } from '../pages/histolabo/histolabo';
import { HomelaboPage } from '../pages/homelabo/homelabo';
import { LaboPage } from '../pages/labo/labo';
import { ProfilPage } from '../pages/profil/profil';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: NavController;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private aFireAuth:AngularFireAuth) {
    this.initializeApp();
    var that = this;
aFireAuth.auth.onAuthStateChanged(function(user) {
      if (user && user.email && user.uid)  {
      
        that.rootPage = AccueilPage;
     
      } 
      else{
        that.rootPage = HomePage;
      }
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: AccueilPage },
      { title: 'Mon Compte', component: ComptePage },
      { title: 'Commander salé', component: SalePage },
      { title: 'Commander sucré', component: SucrePage },
      { title: 'Historique', component: HistoriquePage },
      { title: 'Inscription', component: InscriptionPage },
      { title: 'Clients', component: ClientsPage },
      { title: 'Commande', component: CommandePage },
      { title: 'Histolabo', component: HistolaboPage },
      { title: 'Homelabo', component: HomelaboPage },
      { title: 'Labo', component: LaboPage },
      { title: 'Profil', component: ProfilPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
   
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  gotoaccueil(page){
    this.nav.setRoot(AccueilPage);
  }
  gotosale(page) {
    this.nav.setRoot(SalePage);
  }
  gotosucre(page){
    this.nav.setRoot(SucrePage);
  }
  gotocompte(page){
    this.nav.setRoot(ComptePage);
  }
  gotohistorique(page){
    this.nav.setRoot(HistoriquePage);
  }
  gotohome(page){
  
    this.nav.setRoot(HomePage);
  }
}