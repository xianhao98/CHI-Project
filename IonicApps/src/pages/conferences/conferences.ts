import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpeakersPage } from '../speakers/speakers';

/**
 * Generated class for the ConferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conferences',
  templateUrl: 'conferences.html',
})
export class ConferencesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toSpeakersPage() {
    this.navCtrl.push(SpeakersPage);
  }

}
