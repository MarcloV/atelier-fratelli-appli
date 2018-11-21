
import { Injectable } from '@angular/core';
import { Commande } from '../../models/commande';
import { AngularFireDatabase } from 'angularfire2/database';



@Injectable()
export class CommServiceProvider {
 private commandeListRef = this.db.object<Commande>('commande');



constructor(private db: AngularFireDatabase) {

}

getCommandeList() {
  return this.commandeListRef;
}

filterByString(date: string) {
  return this.db.list('/commande', ref => ref.orderByChild('date').equalTo(date));
}

assembleCommandeFilteredList(ctxt: string): any {
  return(this.filterByString(ctxt));
}





}
