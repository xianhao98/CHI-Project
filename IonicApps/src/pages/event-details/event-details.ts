import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {

  eventid: string;

  constructor(
    private viewCtrl: ViewController, 
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.eventid = navParams.get('eventID');
      console.log('Event ID: ', this.eventid);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
