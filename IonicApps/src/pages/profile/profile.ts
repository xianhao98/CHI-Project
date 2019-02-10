import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, ModalController } from 'ionic-angular';
import { User } from '../../models/user';
import 'firebase/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat/Observable';
import 'rxjs/add/operator/toPromise';
import firebase, { firestore } from 'firebase';
import { HomePage } from '../home/home';
import { EventModalPage } from '../event-modal/event-modal';
import 'rxjs/Rx';

/**
 * Generated class for the EventsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var userid: string;

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {

  userCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  profileData: Observable<User>;

  user: User;

  constructor(
    public db: AngularFirestore,
    public alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams) {

    // this.userCollection = this.db.collection('Users');
    // this.users = this.userCollection.doc(`user/${auth.uid}`).valueChanges();
    this.showProfile();
  }

  showProfile() {
    var docRef = this.db.collection("Users").doc(userid).snapshotChanges();

    docRef.subscribe(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
  }

}