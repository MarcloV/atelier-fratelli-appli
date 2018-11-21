import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Commande} from '../../models/commande'



/**
 * Generated class for the CommandePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-commande',
  templateUrl: 'commande.html',
})
export class CommandePage {

commande:Commande

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  
  ionViewWillLoad() {
    this.commande = this.navParams.get('commande');
   
  }

}
