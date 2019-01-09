import { Component } from '@angular/core';
import { IonicPage, ToastController, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import EventsPage from '../events/events';
import { HomePage } from '../home/home';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  isRound: boolean = true;

  user = {} as User;

  submitted = false;
  
  constructor(
    private afAuth: AngularFireAuth,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  async login(form: NgForm) {

    this.submitted = true;

    if (form.valid)
    {
      try {
        const result = await this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
        console.log(result);
        if(result) {
          console.log("Successfully logged in")
          this.navCtrl.setRoot(HomePage);
          this.presentToast(`Welcome, ${this.user.email}`);
        }
      }
      catch (e) {
        console.error(e);
        console.log("Wrong email or password")
        this.showAlert("Error", "Email or password is incorrect");
      }
    }
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    console.log('Bread has been toasted.');
  
    toast.onDidDismiss(() => {
      console.log('Toast has been eaten.');
    });
  
    toast.present();
  }

  showAlert(title, subTitle) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }

}
