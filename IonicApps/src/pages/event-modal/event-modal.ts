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

/**
 * Generated class for the EventModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var eventDetailId: string;

@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage {

  event = {} as Event;

  eventCollection: AngularFirestoreCollection<Event>;
  eventDoc: AngularFirestoreDocument<Event>;
  events: Observable<Event[]>;

  constructor(
    public db: AngularFirestore,
    private viewCtrl: ViewController,
    private navParams: NavParams) {

    this.eventCollection = this.db.collection('events');
    this.events = this.eventCollection.valueChanges();
    
    this.db.collection("events").get().subscribe((querySnapshot) => {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
      });
    });

    // this.getEventDetail(eventDetailId);
  
    }

    closeModal() {
      this.viewCtrl.dismiss();
    }

    // getEventDetail(eventDetailId: string): AngularFirestoreDocument<Event> {
    //   return this.db.collection('events').doc(eventDetailId);
    // }
}
