import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat/Observable';
import { Event } from '../../models/event';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';


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
    private camera: Camera,
    private imagePicker: ImagePicker,
    public navCtrl: NavController, 
    public navParams: NavParams) {

      this.eventCollection = this.db.collection('events');
      this.events = this.eventCollection.valueChanges();

      this.event.eventType = this.navParams.get('eventType');
      this.event.eventName = this.navParams.get('eventName');
      this.event.eventDesc = this.navParams.get('eventDesc');
      this.event.eventVenue = this.navParams.get('eventVenue');
      this.event.eventDateStart = this.navParams.get('eventDateStart');
      this.event.eventDateEnd = this.navParams.get('eventDateEnd');
      this.event.eventTimeStart = this.navParams.get('eventTimeStart');
      this.event.eventTimeEnd = this.navParams.get('eventTimeEnd');
      this.event.imgURL = "https://firebasestorage.googleapis.com/v0/b/chi-project-database.appspot.com/o/conferences%2Fheathcare3.jpg?alt=media&token=1fe12655-e91b-4faa-a143-b2644f292b4f";
      this.event.slotsTotal = this.navParams.get('slotsTotal');
  }

  async addEvent(event: Event) {

    this.eventCollection.get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.eventid = doc.id;
        this.stringSlice(this.eventid);
      })
    });

    this.eventCollection.add({
      id: this.event.id,
      eventType: this.event.eventType,
      eventName: this.event.eventName,
      eventDesc: this.event.eventDesc,
      eventVenue: this.event.eventVenue,

      eventDateStart: this.event.eventDateStart,
      eventDateEnd: this.event.eventDateEnd,
      eventTimeStart: this.event.eventTimeStart,
      eventTimeEnd: this.event.eventTimeEnd,

      imgURL: this.event.imgURL,

      slotsTotal: this.event.slotsTotal,
      slotsTaken: this.event.slotsTaken,
    })
    console.log(event);
  }

  minus() {
    this.event.slotsTotal = this.event.slotsTotal  - 1;
  }

  plus() {
    this.event.slotsTotal = this.event.slotsTotal  + 1;
  }

  

  // Custom userid that iterates
  stringSlice(id) {
    var str = id;
    var slice = parseInt(str.slice(1, str.length)) + 1;
    this.eventid = "e" + slice;
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
  //   }, (err) => {
  //    console.log(err);
  //   })
  // }

}
