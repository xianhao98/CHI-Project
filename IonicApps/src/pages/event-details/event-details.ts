import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { database } from 'firebase';
import { Observable } from 'rxjs-compat/Observable';

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

  // event = {} as Event;
  // eventCollection: AngularFirestoreCollection<Event>;
  // events: Observable<Event[]>;

  constructor(
    private db: AngularFirestore,
    public navCtrl: NavController,
    public navParams: NavParams) {

    // this.eventCollection = this.db.collection('events');
    // this.events = this.eventCollection.valueChanges();

    this.getDetails();
  }

  getDetails() {
    this.db.collection("events").get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.eventid = doc.id;
        if (doc.id == this.eventid) {
          this.db.collection("events").doc(doc.id).collection("speakers").get().subscribe((querySnapshot) => {
            querySnapshot.forEach((docs) => {
              console.log('All speaker ID: ', docs.id);
            })
          })
        }
      })
    })
  }

  closeModal() {
    this.navCtrl.pop();
  }

}
