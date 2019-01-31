import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ConferencesPage } from '../conferences/conferences';
import { MasterclassesPage } from '../masterclasses/masterclasses';
import { AllEventsPage } from '../all-events/all-events';

/**
 * Generated class for the EventCategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-categories',
  templateUrl: 'event-categories.html',
})
export class EventCategoriesPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  toEventsListPage() {
    this.navCtrl.push(AllEventsPage);
  }

  toConferencesPage() {
    this.navCtrl.push(ConferencesPage);
  }

  toMasterclassesPage() {
    this.navCtrl.push(MasterclassesPage);
  }

}
