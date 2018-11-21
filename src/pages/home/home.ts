import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, ToastController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';

import { AngularFireAuth } from 'angularfire2/auth';
import { InscriptionPage } from '../inscription/inscription';
import { LaboPage } from '../labo/labo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {

	@ViewChild('username') user;
	@ViewChild('password') password;


  constructor( private fire: AngularFireAuth,
    public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController,  
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public modalCtrl:ModalController,
     public navParams: NavParams) {
     
   

}


ionViewDidLoad() {
  console.log('ionViewDidLoad HomePage');
}


alert(message: string) {
  this.alertCtrl.create({
    title: 'Info!',
    subTitle: message,
    buttons: ['OK']
  }).present();
}

submitLogin() {
  this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
  .then( data => {
  
    this.alert('Success! You\'re logged in');
    this.navCtrl.setRoot( AccueilPage );
 
  })
  .catch( error => {
    console.log('got an error', error);
    this.alert(error.message);
  })
  console.log('Would sign in with ', this.user.value, this.password.value);
}

inscription() {
  this.navCtrl.setRoot(InscriptionPage);
     }

     laboConnexion(){
      this.navCtrl.setRoot(LaboPage);
     }
}



