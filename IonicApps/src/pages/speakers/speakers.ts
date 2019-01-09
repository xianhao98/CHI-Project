import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, ModalController } from 'ionic-angular';
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

var speakerid: string;

@IonicPage()
@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage {

  speaker = {} as Speaker;

  speakerCollection: AngularFirestoreCollection<Speaker>;
  speakerDoc: AngularFirestoreDocument<Speaker>;
  speakers: Observable<Speaker[]>;
  
  constructor(
    public db: AngularFirestore,
    public alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.speakerCollection = this.db.collection('Speakers');
    this.speakers = this.speakerCollection.valueChanges();



    this.speakerCollection.get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        speakerid = doc.id;
        console.log(speakerid);
      });
    });

  }

  openModal() {
    console.log(speakerid);
    this.db.collection("Speakers").doc(speakerid).get().subscribe((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })

    const speakerModal = this.modalCtrl.create(SpeakerModalPage, {
      speakerDoc
        : this.speakerDoc
    });
    speakerModal.present();
  }


}