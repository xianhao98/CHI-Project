import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'firebase/firestore';
import { AlertController, IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs-compat/Observable';
import 'rxjs/add/operator/toPromise';
import { first } from 'rxjs/operators';
import { User } from '../../models/user';
import { auth } from 'firebase';
import firebase from 'firebase';

/**
 * Generated class for the EventsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {

  userid: any;

  user = {} as User;

  userCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;

  model: User;

  constructor(
    public db: AngularFirestore,
    public alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams) {

    var cuser = firebase.auth().currentUser;
    var username;

    this.userCollection = this.db.collection('Users');
    firebase.auth().onAuthStateChanged(function (cuser) {
      if (cuser) {
        // User is signed in.
        console.log(cuser);
        console.log(firebase.firestore().collection('Users'));
        firebase.firestore().collection('Users').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.id);
            if (cuser.email == doc.data().Email) {
              firebase.firestore().collection('Users').doc(doc.id).get().then(docs => {
                console.log(docs.data().Username);
                username = docs.data().Username;
              })
            }
          });
        });
      } else {
        // No user is signed in.
      }
    });

  }


  getCurrentUser() {
    
  }


}
