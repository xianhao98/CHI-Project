import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { AllEventsPage } from './all-events';

@NgModule({
  declarations: [
    AllEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(AllEventsPage),
  ],
  exports: [
    AllEventsPage,
  ]
})
export class AllEventsPageModule {}
