import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profil } from '../../models/profil';
import { AngularFireDatabase } from 'angularfire2/database';
import { AccueilPage } from '../accueil/accueil';



@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  profil ={} as Profil;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase) {
  }

createProfil(){
this.afAuth.authState.take(1).subscribe(auth =>{
  this.afDatabase.object(`profil/${auth.uid}`).set(this.profil)
  .then (() => this.navCtrl.setRoot(AccueilPage) )
})
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

}
