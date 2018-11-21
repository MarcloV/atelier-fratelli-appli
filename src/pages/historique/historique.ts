import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the HistoriquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historique',
  templateUrl: 'historique.html',
})
export class HistoriquePage {

  profilData: Observable<any>
  constructor(private toast: ToastController, private afDatabase:AngularFireDatabase, private afAuth: AngularFireAuth,  public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController,) {
    }


    ionViewDidLoad() {
      this.afAuth.authState.take(1).subscribe(data =>{
        if(data && data.email && data.uid){
          this.toast.create({
            message: 'Prêt pour votre recherche?',
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
