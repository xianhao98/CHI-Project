import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams) {

  }

  toLoginPage() {
    this.navCtrl.push(LoginPage);
  }

  // ionViewWillLoad() {
  //   this.afAuth.authState.subscribe(data => {
  //     if (data && data.email && data.uid) {
  //       this.toast.create({
  //         message: `Welcome, ${data.email}`,
  //         duration: 3000 // Appears for 3 Seconds
  //       }).present();
  //     }
  //     else {
  //       this.toast.create({
  //         message: `Unable to find authentication details`,
  //         duration: 3000 // Appears for 3 Seconds
  //       }).present();
  //     }
  //   });
  // }

}
