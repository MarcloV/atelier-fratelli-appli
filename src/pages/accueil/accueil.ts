import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { SalePage } from '../sale/sale';
import { SucrePage } from '../sucre/sucre';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {
  profilData: Observable<any>

  constructor(private toast: ToastController, private afDatabase:AngularFireDatabase, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController,) {
  }


  onButtonClicked(): void {
    let modal = this.modalCtrl.create(SalePage);
   modal.present();
     }
     onButtonClicked2(): void {
       let modal = this.modalCtrl.create(SucrePage);
      modal.present();
        }
        ionViewDidLoad() {
          this.afAuth.authState.take(1).subscribe(data =>{
            if(data && data.email && data.uid){
              this.toast.create({
                message: 'Bienvenue',
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
