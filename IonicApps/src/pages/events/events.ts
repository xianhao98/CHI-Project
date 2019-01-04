import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import 'firebase/firestore';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat/Observable';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export default class EventsPage {

  email: string;
  eventID: any;
  eventCollection: AngularFirestoreCollection<any>;
  eventDoc: AngularFirestoreDocument<any>;
  events: Observable<any>;

  constructor(
    public db: AngularFirestore,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams) {

      this.eventCollection = this.db.collection('Events');
      this.events = this.eventCollection.valueChanges();
      this.email = this.navParams.get('email');
      console.log(this.email);
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
            this.eventCollection.add(data).then(result => {
              console.log(result.id);
              this.eventID = result.id;
              this.db.doc(`Events/${result.id}`).update({id: this.eventID});
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
      title: 'Add Event',
      inputs: [{
        name: 'eventName',
        value: event.eventName,
        placeholder: 'Enter event name'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.db.doc(`Events/${event.id}`).update(data);
          }
        }
      ]
    });
    alert.present();
  }

  // DELETE EXISTING EVENT
  delete(event) {
    this.db.doc(`Events/${event.id}`).delete();
  }

}
