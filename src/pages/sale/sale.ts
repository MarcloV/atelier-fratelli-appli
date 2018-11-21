import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import { CommandeFormGeneratorProvider } from '../../providers/commande-form-generator/commande-form-generator';
import {Commande} from '../../models/commande';
import { FormGroup } from "@angular/forms";
import * as firebase from 'firebase';
import { AccueilPage } from '../accueil/accueil';
import { HomePage } from '../home/home';
import { Observable } from 'rxjs/observable';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the SalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sale',
  templateUrl: 'sale.html',
})
export class SalePage {

  profilData: Observable<any>
  rootPage: any = HomePage;


commande: Commande={
  date: '',
  focaccia: '',
  pizza: {
    tartufo: '',
    bufala: '',
    capra: '',
    tonno: '',
    parma: '',
    formaggi: '',
  },
  frais: {
    mozzarella: '',
    parme: '',
    jambon: '',
    speck: '',
    poulet: '',
    fontina: '',
    parmesan: '',
  },
  legumes: {
    salade: '',
    roquette: '',
    tomateCerise: '',
    tomateSechee: '',
    tomateFocaccia: '',
    carottes: '',
    aubergine: '',
    champignons:'',
    oignonsCaramelises: '',
    oignonsRouges: '',
  },
  vinaigrette: '',
}

  form: FormGroup
 
 
  isFormValid() {
    return this.form.valid;
  }

  constructor(private afDatabase:AngularFireDatabase, private toast: ToastController, private alertCtrl: AlertController, cfg:CommandeFormGeneratorProvider, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController,) {

    this.form = cfg.create(this.commande);
  }

  getCommande() {
    return this.form.value;
  }
 
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  

 saveCommande(){
  firebase.database().ref('/commande').push(this.getCommande())
  this.navCtrl.setRoot(AccueilPage);
  this.alert('Votre commande a été envoyée');

 }


  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(data =>{
      if(data && data.email && data.uid){
        this.toast.create({
          message: 'Prêt pour faire votre commande?',
          duration: 3000
        }).present();
      this.profilData = this.afDatabase.list(`profil/${data.uid}`).valueChanges();
    }
    else{
      this.toast.create({
        message: 'Profil pas trouvé',
        duration: 3000
      }).present();
    }
    })
  }
 
}
