import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import { FormGroup } from '../../../node_modules/@angular/forms';
import { DessertFormGeneratorProvider } from '../../providers/dessert-form-generator/dessert-form-generator';
import { HomePage } from '../home/home';
import { Dessert } from '../../models/dessert';
import * as firebase from 'firebase';
import { AccueilPage } from '../accueil/accueil';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the SucrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sucre',
  templateUrl: 'sucre.html',
})
export class SucrePage {
  rootPage: any = HomePage;
 
profilData: Observable<any>

  


dessert: Dessert = {
  date: '',
  tiramisu: {
cafe: '',
gianduja: '',
coco: '',
fruitsrouges: '',
  },
  pannacotta: '',
}


form: FormGroup

isFormValid() {
  return this.form.valid;
}

  constructor(private alertCtrl: AlertController, private toast: ToastController, private afDatabase: AngularFireDatabase, private afAuth: AngularFireAuth, dfg: DessertFormGeneratorProvider, public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController,) {
   
    this.form = dfg.create(this.dessert);
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
    
  
   saveCommandeSucre(){
    firebase.database().ref('/dessert').push(this.getCommande())
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
      this.profilData = this.afDatabase.object(`profil/${data.uid}`).valueChanges();
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
