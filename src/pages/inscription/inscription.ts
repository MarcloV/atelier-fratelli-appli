

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import{ProfilPage} from '../profil/profil';
import { User } from '../../models/user';


@IonicPage()
@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html',
})



export class InscriptionPage {

  user = {} as User;
  
    constructor( private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) { 

    }
   
  


   async register (user: User){
    try{
    const result= await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    console.log(result);
    if(result)  {
      let modal = this.modalCtrl.create(ProfilPage);
      modal.present();
    }
  }
  catch(e){
console.log(e);
  }

}

ionViewDidLoad() {
  console.log('ionViewDidLoad InscriptionPage');
}

}
