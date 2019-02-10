import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventDetailsPage } from './event-details';

@NgModule({
  declarations: [
    EventDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EventDetailsPage),
  ],
  exports: [
    EventDetailsPage,
  ]
})
export class EventDetailsPageModule {}
