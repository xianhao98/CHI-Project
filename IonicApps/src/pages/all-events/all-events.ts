import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, ModalController } from 'ionic-angular';
import { User } from '../../models/user';
import 'firebase/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat/Observable';
import 'rxjs/add/operator/toPromise';
import firebase, { firestore } from 'firebase';
import { HomePage } from '../home/home';
import { EventModalPage } from '../event-modal/event-modal';
import { SpeakersPage } from '../speakers/speakers';
import { EventRegistrationPage } from '../event-registration/event-registration';

/**
 * Generated class for the All Events page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var eventid: string;

@IonicPage()
@Component({
  selector: 'page-all-events',
  templateUrl: 'all-events.html',
})
export class AllEventsPage {

  event = {} as Event;

  eventCollection: AngularFirestoreCollection<Event>;
  //eventDoc: AngularFirestoreDocument<Event>;
  events: Observable<Event[]>;

  constructor(
    public db: AngularFirestore,
    public alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.eventCollection = this.db.collection('events');
    this.events = this.eventCollection.valueChanges();



    this.eventCollection.get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        eventid = doc.id;
        console.log("Event ID:", eventid);
      });
    });

  }

  openModal() {
    // Push the whole page instead of a modal
    this.navCtrl.push(EventModalPage, {eventid: eventid});

    // Modal: displayed as a small window(?) on the webpage
    // const eventModal = this.modalCtrl.create(EventModalPage);
    // console.log("Created a new EventModalPage");
    // eventModal.present();
    // console.log("Presented the new EventModalPage");
  }

  register() {
    this.navCtrl.push(EventRegistrationPage);
  }

}
