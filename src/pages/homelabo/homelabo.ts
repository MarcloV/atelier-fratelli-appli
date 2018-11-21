import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {CommServiceProvider} from '../../providers/comm-service/comm-service'
import { CommandePage } from '../commande/commande';
import { Commande } from '../../models/commande';
import { Observable } from 'rxjs';
import  'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import './rxjs-operators';
import 'rxjs/Rx';



@IonicPage()
@Component({
  selector: 'page-homelabo',
  templateUrl: 'homelabo.html',
})
export class HomelaboPage  {

  commandesList$: Observable<Commande[]>;



  constructor(public navCtrl: NavController, public navParams: NavParams,
  private commService: CommServiceProvider) {
  
  }

  ionViewDidLoad() {
    this.commandesList$= this.commService.getCommandeList().snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({
       date: c.payload.key, ...c.payload.val()
      }));
    }));
  }

  onContextChange(ctxt: string): void {
    this.commandesList$ = this.commService.assembleCommandeFilteredList(ctxt).snapshotChanges().map(changes => {
      return changes.map(c => ({
        date: c.payload.key, ...c.payload.val()
      }));
    });
  }

  




  
}

