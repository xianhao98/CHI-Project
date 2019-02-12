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

  clicked = false;

  event = {} as Event;

  eventsRegistered: AngularFirestoreCollection<Event>;
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
        console.log(this.events);
        console.log("All Event ID:", eventid);
      });
    });

  }

  openModal(id) {
    this.clicked = true;
    // Push the whole page instead of a modal
    console.log('Open Modal: ', id);
    this.navCtrl.push(EventModalPage, { eventid: id });

    // Modal: displayed as a small window(?) on the webpage
    // const eventModal = this.modalCtrl.create(EventModalPage);
    // console.log("Created a new EventModalPage");
    // eventModal.present();
    // console.log("Presented the new EventModalPage");
  }

  register() {
    // this.navCtrl.push(EventRegistrationPage);
    this.showConfirm();

  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Register',
      message: 'Register for this event?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Register Cancelled');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            console.log('Register Successful.');

            setTimeout(function () {
              this.eventsRegistered = firebase.firestore().collection("Users").doc("U2").collection("registeredEvents").doc();

              this.eventsRegistered.set({ eventid: eventid })

                .then(function () {
                  console.log("Doc written to database");
                })
                .catch(function (error) {
                  console.error("Error adding document: ", error);
                });
            }, 1000);

            this.showAlert('Success', 'You are now registered for this event.');
          }
        }
      ]
    });
    confirm.present();
  }

  showAlert(title, subTitle) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }

}
