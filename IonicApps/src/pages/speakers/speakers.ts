import { Component, OnInit } from '@angular/core';
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
var data =[];

@IonicPage()
@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage implements OnInit{

  speakerid: string;
  eventid: string;

  speaker: Speaker[];

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
    this.eventid = this.navParams.get('eventid');
    console.log('Passed eventid: ', this.eventid);
    this.getDetails();

  }
  ngOnInit(){
    setTimeout(() => {
      console.log("in ngOnInit method");
      console.log(data);
      console.log(data.length);
      this.speaker = [
        new Speaker(data[0],data[1],data[2],data[3],data[4]),
        new Speaker(data[5],data[6],data[7],data[8],data[9]),
        new Speaker(data[10],data[11],data[12],data[13],data[14])
      ];
    }, 2100);
  }
  getDetails() {
    console.log("in method")
        this.db.collection("events").doc("e001").collection("speakers").get().subscribe((querySnapshot) => {
          querySnapshot.forEach((docs) => {
              console.log(docs.data());
              data.push(docs.data().imgURL);
              data.push(docs.data().speakerTitle);
              data.push(docs.data().speakerName);
              data.push(docs.data().speakerOrganisation);
              data.push(docs.data().speakerPosition);
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

