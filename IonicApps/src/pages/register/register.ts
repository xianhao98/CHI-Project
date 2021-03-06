import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import 'firebase/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat/Observable';
import 'rxjs/add/operator/toPromise';
import firebase from 'firebase';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var userid: string;

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  defaultProfilePic: string = "https://firebasestorage.googleapis.com/v0/b/chi-project-database.appspot.com/o/Userpic%2FdefaultProfile.jpg?alt=media&token=431fb1f6-9a47-4530-aae2-076e5a5230a4";

  userCollection: AngularFirestoreCollection<any>;
  userDoc: AngularFirestoreDocument<any>;
  users: Observable<any>;


  constructor(
    public db: AngularFirestore,
    public alertCtrl: AlertController,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.userCollection = this.db.collection('Users');
    this.users = this.userCollection.valueChanges();
    // Account
    this.user.email = this.navParams.get('email');
    this.user.password = this.navParams.get('password');
    this.user.confirmPassword = this.navParams.get('confirmPassword');
    this.user.username = this.navParams.get('username');
    this.user.userType = 1;
    // Profile
    this.user.firstName = this.navParams.get('firstName');
    this.user.lastName = this.navParams.get('lastName');
    this.user.dob = this.navParams.get('dob');
    this.user.userImg = this.defaultProfilePic;
    // Contact
    this.user.contactNo = this.navParams.get('contactNo');
    this.user.address = this.navParams.get('address');
  }

  onChange(value) {
    console.log(value);
    this.user.gender = value;
  }

  passwordsMatch = false;

  matchPasswords() {
    if (this.user.confirmPassword == this.user.password) {
      // Passwords match
      this.passwordsMatch = true;
    } else {
      // Passwords do not match
      this.passwordsMatch = false;
    }
  }

  async register(user) {

    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if (result) {

        this.matchPasswords();
        if (this.passwordsMatch == true) {
          // If Password and Confirm Password match
          console.log("Passwords match");

          this.userCollection.get().subscribe((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              userid = doc.id;
              this.stringSlice(userid);
              console.log(userid);
            })
          });

          setTimeout(function () {
            this.userDoc = firebase.firestore().collection("Users").doc(userid);
            // Add new document
            this.userDoc.set({
              // Account
              Email: user.email,
              Password: user.password,
              Username: user.username,
              // Profile
              FirstName: user.firstName,
              LastName: user.lastName,
              Gender: user.gender,
              Dob: user.dob,
              UserImg: user.userImg,
              // Contact
              ContactNumber: user.contactNo,
              Address: user.address,
              UserType: user.userType
            })
              .then(function () {
                console.log("Doc written to database");
              })
              .catch(function (error) {
                console.error("Error adding document: ", error);
              });
          }, 1000);

          // Redirect to LoginPage
          this.navCtrl.push(LoginPage);

          // Success Alert
          this.showAlert("Success", "Your account has been created!");

        }

      } else {
        // If Password and Confirm Password do not match
        console.log("Passwords do not match");
        this.showAlert("Confirm Password", "The passwords you have entered do not match. Please confirm your password.");
        this.user.password = "";
        this.user.confirmPassword = "";
      }
    }
    catch (e) {
      console.error(e);
      if (e.code == "auth/argument-error") {
        // If form is incomplete
        this.showAlert("Error", "Please complete all fields.");
      }
      else if (e.code == "auth/invalid-email") {
        // If email is invalid
        this.showAlert("Invalid Email", "Please enter a valid email")
      }
      else {
        // Any other errors, show error message
        this.showAlert("Error", e);
      }

    }

  }

  // Custom userid that iterates
  stringSlice(uid) {
    var str = uid;
    var slice = parseInt(str.slice(1, str.length)) + 1;
    userid = "U" + slice;
    console.log(userid);
  }

  // Basic Alert: takes in title, subTitle
  showAlert(title, subTitle) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }

}