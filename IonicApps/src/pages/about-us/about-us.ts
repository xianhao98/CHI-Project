import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import 'firebase/firestore';
import { AlertController, IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs-compat/Observable';
import 'rxjs/add/operator/toPromise';
import { first } from 'rxjs/operators';
import { User } from '../../models/user';
import { auth } from 'firebase';
import firebase from 'firebase';
import { AboutUs } from '../../models/aboutUs';
import { ValueTransformer } from '@angular/compiler/src/util';

/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var data =[];
@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage implements OnInit{
  
  aboutUs: AboutUs[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("in about us page");
    
      this.getdata();
    
    
  }
	ngOnInit() {
    setTimeout(() => {
    console.log("in ngOnInit method");
    console.log(data);
    console.log(data.length);
    this.aboutUs = [
      new AboutUs(data[0],data[1],data[2],data[3],data[4]),
      new AboutUs(" "," ",data[7],data[8],data[9]),
      new AboutUs(" "," ",data[12],data[13],data[14])
    ];
  }, 2100);
  }
  getdata(){
    console.log("in getdata method");
    firebase.firestore().collection("Aboutus").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        firebase.firestore().collection("Aboutus").doc(doc.id).collection("Pcollect1").get().then((querySnapshot) =>{
          querySnapshot.forEach((docs) =>{
            data.push(doc.data().header);
            data.push(doc.data().Subdesc);
            data.push(docs.data().header);
            data.push(docs.data().Subdesc);
            data.push(docs.data().Maindesc);
          })
        })
      });
    });
  }


}
