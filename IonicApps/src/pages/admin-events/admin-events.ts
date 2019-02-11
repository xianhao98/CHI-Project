import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import 'firebase/firestore';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat/Observable';
import { AddEventPage } from '../add-event/add-event';
import { EditEventPage } from '../edit-event/edit-event';

/**
 * Generated class for the AdminEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-events',
  templateUrl: 'admin-events.html',
})
export class AdminEventsPage {

  eventid: any;
  eventCollection: AngularFirestoreCollection<any>;
  eventDoc: AngularFirestoreDocument<any>;
  events: Observable<any>;

  constructor(
    public db: AngularFirestore,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.eventCollection = this.db.collection('events');
    this.events = this.eventCollection.snapshotChanges();
  }

  toAddEventPage() {
    this.navCtrl.push(AddEventPage);
  }

  toEditEventPage() {
    this.navCtrl.push(EditEventPage);
  }

  // addEvent(eventName: string, eventDesc: string, slotsTotal: number) {

  //   this.eventCollection.add({ eventName: eventName, eventDesc: eventDesc, slotsTotal: slotsTotal });
  //   console.log('Added event!')

  // }

  // updateEvent(event: Event) {
  //   this.eventCollection.get().subscribe((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       this.eventid = doc.id;
  //       console.log(this.eventid);
  //       if (this.eventid == doc.id) {
  //         this.eventCollection.doc(this.eventid).update({ eventName: 'eventName', eventDesc : 'eventDesc' , slotsTotal : 'slotsTotal' });
  //         console.log('Updated event!');
  //       }
  //       else {
  //         console.log('Event not updated.');
  //       }
  //     })
  //   });
  // }

}
