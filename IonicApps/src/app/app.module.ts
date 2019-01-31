import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { firebaseConfig } from './credentials';

import { EventsPage } from '../pages/events/events';
import { EventsPageModule } from '../pages/events/events.module';
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';
import { RegisterPage } from '../pages/register/register';
import { RegisterPageModule } from '../pages/register/register.module';
import { EventCategoriesPage } from '../pages/event-categories/event-categories';
import { EventCategoriesPageModule } from '../pages/event-categories/event-categories.module';
import { ConferencesPage } from '../pages/conferences/conferences';
import { ConferencesPageModule } from '../pages/conferences/conferences.module';
import { MasterclassesPage } from '../pages/masterclasses/masterclasses';
import { MasterclassesPageModule } from '../pages/masterclasses/masterclasses.module';
import { AllEventsPage } from '../pages/all-events/all-events';
import { AllEventsPageModule } from '../pages/all-events/all-events.module';
import { EventModalPage } from '../pages/event-modal/event-modal';
import { Tab1 } from '../pages/event-modal/event-modal';
import { EventModalPageModule } from '../pages/event-modal/event-modal.module';
import { ProfilePage } from '../pages/profile/profile';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { AboutUsPageModule } from '../pages/about-us/about-us.module';
import { AboutUsPage } from '../pages/about-us/about-us';
import { PartnershipsPage } from '../pages/partnerships/partnerships';
import { PartnershipsPageModule } from '../pages/partnerships/partnerships.module';
import { SpeakerModalPage } from '../pages/speaker-modal/speaker-modal';
import { SpeakerModalPageModule } from '../pages/speaker-modal/speaker-modal.module';
import { SpeakersPage } from '../pages/speakers/speakers';
import { SpeakersPageModule } from '../pages/speakers/speakers.module';
import { LandingPageModule } from '../pages/landing/landing.module';
import { LandingPage } from '../pages/landing/landing';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Tab1,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AboutUsPageModule,
    ConferencesPageModule,
    EventCategoriesPageModule,
    EventModalPageModule,
    EventsPageModule,
    AllEventsPageModule,
    LandingPageModule,
    LoginPageModule,
    MasterclassesPageModule,
    PartnershipsPageModule,
    ProfilePageModule,
    RegisterPageModule,
    SpeakerModalPageModule,
    SpeakersPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    LandingPage,
    LoginPage,
    RegisterPage,
    EventCategoriesPage,
    AllEventsPage,
    ConferencesPage,
    SpeakersPage,
    SpeakerModalPage,
    MasterclassesPage,
    EventModalPage,
    AboutUsPage,
    PartnershipsPage,
    EventsPage,
    Tab1,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
