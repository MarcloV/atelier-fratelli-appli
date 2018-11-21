import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SucrePage } from './sucre';

@NgModule({
  declarations: [
    SucrePage,
  ],
  imports: [
    IonicPageModule.forChild(SucrePage),
  ],
})
export class SucrePageModule {}
