import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import EventsPage from '../pages/events/events';
import { EventsListPage } from '../pages/events-list/events-list';
import { EventCategoriesPage } from '../pages/event-categories/event-categories';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Events', component: EventCategoriesPage },
      { title: 'Log Out', component: null },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    if(page.component) {
      this.nav.setRoot(page.component);
    }
    else {
      // LOGOUT
      this.showConfirm();
    }
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Log Out',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Logout Cancelled');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            console.log('Successfully logged out.');
            this.presentToast("You have been logged out.");
            this.nav.setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }

  // Toast, takes in message
  presentToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}
