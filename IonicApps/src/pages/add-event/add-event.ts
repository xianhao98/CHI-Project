import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat/Observable';
import { Event } from '../../models/event';
import { EventDetailsPage } from '../event-details/event-details';
import firebase from 'firebase';


/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  // Creates a new object
  event = {} as Event;

  eventid: string;

  eventCollection: AngularFirestoreCollection<any>;
  eventDoc: AngularFirestoreDocument<any>;
  events: Observable<any>;

  constructor(
    public db: AngularFirestore,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.eventCollection = this.db.collection('events');
    this.events = this.eventCollection.valueChanges();

    this.event.eventName = this.navParams.get('eventName');
    this.event.eventDesc = this.navParams.get('eventDesc');
    this.event.eventVenue = this.navParams.get('eventVenue');
    this.event.eventDateStart = this.navParams.get('eventDateStart');
    this.event.eventDateEnd = this.navParams.get('eventDateEnd');
    this.event.eventTimeStart = this.navParams.get('eventTimeStart');
    this.event.eventTimeEnd = this.navParams.get('eventTimeEnd');
    this.event.imgURL = "https://firebasestorage.googleapis.com/v0/b/chi-project-database.appspot.com/o/imgPlaceholder.jpg?alt=media&token=c4c44780-3c10-48db-920f-1473c1e34620";
    this.event.slotsTotal = this.navParams.get('slotsTotal');
  }

  onChange(value) {
    console.log(value);
    this.event.eventType = value;
  }

  async addEvent(event) {

    this.eventCollection.get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.eventid = doc.id;
        this.stringSlice(this.eventid);
        console.log(this.eventid);
      })
    });

    setTimeout(function () {
      this.eventDoc = firebase.firestore().collection("events").doc(this.eventid);

      this.eventDoc.set({
        eventType: event.eventType,
        eventName: event.eventName,
        eventDesc: event.eventDesc,
        eventVenue: event.eventVenue,

        eventDateStart: event.eventDateStart,
        eventDateEnd: event.eventDateEnd,
        eventTimeStart: event.eventTimeStart,
        eventTimeEnd: event.eventTimeEnd,

        imgURL: event.imgURL,

        slotsTaken: event.slotsTaken,
      })
      .then(function () {
        console.log("Added event to firebase")
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      })

      console.log("Added New Event", event);
    }, 1000);

  }


  // Custom userid that iterates
  stringSlice(uid) {
    var str = uid;
    var slice = parseInt(str.slice(1, str.length)) + 1;
    this.eventid = "e00" + slice;
    console.log(this.eventid);
  }

  // takePhoto() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }

  //   this.camera.getPicture(options).then((imageData) => {
  //    // imageData is either a base64 encoded string or a file URL
  //    // If it's base64 (DATA_URL):
  //    let base64Image = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //    console.log(err);
  //   });
  // }

  // uploadPhoto() {
  //   const options: CameraOptions = {
  //     quality: 80,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  //     saveToPhotoAlbum: false,
  //   }

  //   this.camera.getPicture(options).then((imageData) => {
  //     // imageData is either a base64 encoded string or a file URL
  //     // If it's base64:
  //     let base64Image = 'data:image/jpeg;base64,' + imageData;
  //     this.event.imgURL = base64Image;
  //   }, (err) => {
  //    console.log(err);
  //   })
  // }

}
