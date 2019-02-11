import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, ModalController } from 'ionic-angular';
import { User } from '../../models/user';
import 'firebase/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import 'firebase/firestore';
import { Observable } from 'rxjs-compat/Observable';
import 'rxjs/add/operator/toPromise';
import { first } from 'rxjs/operators';
import { auth } from 'firebase';
import firebase from 'firebase';
import { Profile } from '../../models/profile';

/**
 * Generated class for the Profile page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 var username: string;
 var data =[];
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage implements OnInit{
  profile: Profile[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    var cUser = firebase.auth().currentUser;
    this.getprofile();
  }
    ngOnInit(){
      setTimeout(() => {
        console.log("in ngoninit");
        this.profile = [
          new Profile(data[0], data[1],data[2], data[3], data[4],data[5], data[6], data[7], data[8]),
        ];
      }, 2100);
    }
    getprofile(){
      firebase.auth().onAuthStateChanged(function (cUser) {
        if (cUser) {
          // User is signed in.
          console.log(cUser.email);
          firebase.firestore().collection('Users').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log(doc.id);
              if (cUser.email == doc.data().Email) {
                firebase.firestore().collection('Users').doc(doc.id).get().then(docs => {
                  console.log(docs.data().Address);
                  console.log(docs.data().ContactNumber);
                  console.log(docs.data().Dob);
                  console.log(docs.data().Email);
                  console.log(docs.data().FirstName);
                  console.log(docs.data().Gender);
                  console.log(docs.data().LastName);
                  console.log(docs.data().UserImg);
                  console.log(docs.data().Username);
                  data.push(docs.data().Address);
                  data.push(docs.data().ContactNumber);
                  data.push(docs.data().Dob);
                  data.push(docs.data().Email);
                  data.push(docs.data().FirstName);
                  data.push(docs.data().Gender);
                  data.push(docs.data().LastName);
                  data.push(docs.data().UserImg);
                  data.push(docs.data().Username);
                  console.log(data);
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
