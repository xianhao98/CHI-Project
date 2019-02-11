import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, ModalController, ViewController } from 'ionic-angular';
import 'firebase/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat/Observable';
import 'rxjs/add/operator/toPromise';
import firebase, { firestore } from 'firebase';
import { HomePage } from '../home/home';
import { Speaker } from '../../models/speaker';
import { SpeakerModalPage } from '../speaker-modal/speaker-modal';

/**
 * Generated class for the SpeakersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage {

  speakerid: string;
  eventid: string;

  speaker = {} as Speaker;

  constructor(
    public db: AngularFirestore,
    public alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams) {

    
    // All speakers
    // this.speakerCollection.get().subscribe((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     this.speakerid = doc.id;
    //     console.log("Speaker ID: ", this.speakerid);
    //   });
    // });

    // this.speaker.speakerName = this.navParams.get('speakerName');
    // console.log(this.speaker.speakerName);
    this.eventid = this.navParams.get('eventID');
    console.log('Passed eventid: ', this.eventid);

    this.getDetails();

  }

  getDetails() {
    this.db.collection("events").get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.db.collection("events").doc(doc.id).collection("speakers").get().subscribe((querySnapshot) => {
          querySnapshot.forEach((docs) => {
            if (this.eventid == doc.id) {
              console.log(docs.data());
              this.speaker.imgURL = docs.data().imgURL;
              this.speaker.speakerTitle = docs.data().speakerTitle;
              this.speaker.speakerName = docs.data().speakerName;
              this.speaker.speakerOrganisation = docs.data().speakerOrganisation;
              this.speaker.speakerPosition = docs.data().speakerPosition;
            }
          })
        })
      })
    })
  }

  openModal() {
    // Speaker Profile
    this.navCtrl.push(SpeakerModalPage);
  }


  closeModal() {
    this.navCtrl.pop();
  }


}

