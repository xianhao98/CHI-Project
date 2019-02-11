import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, ModalController, ViewController } from 'ionic-angular';
import { User } from '../../models/user';
import 'firebase/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat/Observable';
import 'rxjs/add/operator/toPromise';
import firebase, { firestore } from 'firebase';
import { HomePage } from '../home/home';
import { SpeakersPage } from '../speakers/speakers';
import { EventDetailsPage } from '../event-details/event-details';

/**
 * Generated class for the EventModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Heart</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>Tab 1</ion-content>`
})
export class Tab1 { }

@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage {
  eventid: string;
  tab1: any;
  tab2: any;

  constructor(
    public db: AngularFirestore,
    private viewCtrl: ViewController,
    private navParams: NavParams) {
      this.eventid = this.navParams.get('eventid');
      console.log(this.eventid);
      this.tab1 = EventDetailsPage;
      this.tab2 = SpeakersPage;
    }


    closeModal() {
      this.viewCtrl.dismiss();
    }

    // getEventDetail(eventDetailId: string): AngularFirestoreDocument<Event> {
    //   return this.db.collection('events').doc(eventDetailId);
    // }
}
