import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
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

 var username: string;

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
  //users: any = [];

  constructor(
    public db: AngularFirestore,
    public alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams) {

    var cUser = firebase.auth().currentUser;
    

    this.userCollection = this.db.collection('Users');
    
    //this.users = this.userCollection.valueChanges();
    
    this.getCurrentUser();

  }


  getCurrentUser() {
    firebase.auth().onAuthStateChanged(function (cUser) {
      if (cUser) {
        // User is signed in.
        console.log(cUser);
        console.log(firebase.firestore().collection('Users'));
        firebase.firestore().collection('Users').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.id);
            if (cUser.email == doc.data().Email) {
              firebase.firestore().collection('Users').doc(doc.id).get().then(docs => {
                this.userDoc = this.db.collection('Users').doc(doc.id);
                console.log(docs.data().Username);
                console.log(this.userDoc);
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


}
