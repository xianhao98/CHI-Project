import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasterclassesPage } from './masterclasses';

@NgModule({
  declarations: [
    MasterclassesPage,
  ],
  imports: [
    IonicPageModule.forChild(MasterclassesPage),
  ],
})
export class MasterclassesPageModule {}
