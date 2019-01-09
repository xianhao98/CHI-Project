import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { EventCategoriesPage } from '../event-categories/event-categories';
import { AboutUsPage } from '../about-us/about-us';

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

  toAboutUsPage() {
    this.navCtrl.push(AboutUsPage);
  }

  toEventsPage() {
    this.navCtrl.push(EventCategoriesPage);
  }

  

}
