import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventCategoriesPage } from './event-categories';

@NgModule({
  declarations: [
    EventCategoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(EventCategoriesPage),
  ],
})
export class EventCategoriesPageModule {}
