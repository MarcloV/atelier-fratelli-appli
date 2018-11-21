import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, ModalController } from 'ionic-angular';
import { HomelaboPage } from '../homelabo/homelabo';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LaboPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-labo',
  templateUrl: 'labo.html',
})
export class LaboPage {

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

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  conectHomelabo(){
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
  .then( (user) => {
    console.log('got some data', this.fire.auth.currentUser);
    this.alert('Success! You\'re logged in');
    this.navCtrl.setRoot( HomelaboPage );
    // user is logged in
  })
  .catch( error => {
    console.log('got an error', error);
    this.alert(error.message);
  })
  console.log('Would sign in with ', this.user.value, this.password.value);
}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LaboPage');
  }

}
