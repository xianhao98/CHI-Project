import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import 'firebase/firestore';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat/Observable';

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

  eventID: any;
  eventCollection: AngularFirestoreCollection<any>;
  eventDoc: AngularFirestoreDocument<any>;
  events: Observable<any>;

  constructor(
    public db: AngularFirestore,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams) {

      this.eventCollection = this.db.collection('events');
      this.events = this.eventCollection.valueChanges();
    }

  // ADD NEW EVENT
  addEvent() {
    let alert = this.alertCtrl.create({
      title: 'Add Event',
      inputs: [{
        name: 'eventName',
        placeholder: 'Enter event name'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.eventCollection.add(data).then(doc => {
              console.log(doc.id);
              this.eventID = doc.id;
              this.db.doc(`events/${doc.id}`).update({id: this.eventID});
            })
            .catch(err => {
              console.log(err);
            })
          }
        }
      ]
    });
    alert.present();
  }

  // EDIT AND UPDATE EXISTING EVENT
  edit(event) {
    let alert = this.alertCtrl.create({
      title: 'Edit Event',
      inputs: [{
        name: 'eventName',
        value: event.eventName,
        placeholder: 'Edit event name'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.eventCollection.get().subscribe((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                this.eventCollection.doc(doc.id).update(data);
              })
            })
          }
        }
      ]
    });
    alert.present();
  }

  // DELETE EXISTING EVENT
  delete(event) {
    this.db.doc(`events/${event.id}`).delete();
  }

}
