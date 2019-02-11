import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminEventsPage } from '../admin-events/admin-events';
import { HomePage } from '../home/home';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toAdminEventsPage() {
    this.navCtrl.push(AdminEventsPage);
  }

  toHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

}
