import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { database } from 'firebase';
import { Observable } from 'rxjs-compat/Observable';
import { HomePage } from '../home/home';
import { eventDetails } from '../../models/eventdetails';
/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var data =[];
@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage implements OnInit{
  eventdetails: eventDetails[];
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
  ngOnInit(){
    setTimeout(() => {
      console.log("in ngOnInit method");
      console.log(data);
      console.log(data.length);
      this.eventdetails = [
        new eventDetails(data[0],data[1],data[2],data[3],data[4],data[5],data[6],data[7])
      ];
    }, 2100);
  }
  getDetails() {
    this.db.collection("events").doc("e001").get().subscribe(doc => {
      console.log(doc.data());
      data.push(doc.data().eventDateEnd);
      data.push(doc.data().eventDateStart);
      data.push(doc.data().eventDesc);
      data.push(doc.data().eventName);
      data.push(doc.data().eventType);
      data.push(doc.data().eventVenue);
      data.push(doc.data().slotsTotal);
      data.push(doc.data().imgURL);
    })
  }

  closeModal() {
    this.navCtrl.pop();
  }

}
