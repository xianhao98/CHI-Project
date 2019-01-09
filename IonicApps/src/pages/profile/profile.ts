import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'firebase/firestore';
import { AlertController, IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs-compat/Observable';
import 'rxjs/add/operator/toPromise';
import { User } from '../../models/user';
import { auth } from 'firebase';

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

    this.userCollection = this.db.collection('Users');
    this.users = this.userCollection.valueChanges();
    this.showProfile();
  }

  showProfile() {
    this.afAuth.authState.subscribe(auth => {
      this.db.doc(`user/${auth.uid}`).valueChanges;
    })
  }

  // ionViewWillLoad() {
  //   this.profileData = this.db.doc(`user/${auth.uid}`).valueChanges();
  // }

}
