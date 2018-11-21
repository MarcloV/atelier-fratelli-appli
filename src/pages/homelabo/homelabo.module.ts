import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomelaboPage } from './homelabo';

@NgModule({
  declarations: [
    HomelaboPage,
  ],
  imports: [
    IonicPageModule.forChild(HomelaboPage),
  ],
})
export class HomelaboPageModule {}
