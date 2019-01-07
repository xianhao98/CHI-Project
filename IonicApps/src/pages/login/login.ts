import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  user = {} as User;

  submitted = false;
  
  constructor(
    private afAuth: AngularFireAuth,
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
          this.navCtrl.setRoot(HomePage);
          console.log("Successfully logged in")
        }
      }
      catch (e) {
        console.error(e);
        console.log("Wrong email or password")
      }
    }
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

}
