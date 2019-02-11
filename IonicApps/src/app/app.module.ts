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
import { CommonModule } from '@angular/common';
import { EventDetailsPage } from '../pages/event-details/event-details';
import { EventDetailsPageModule } from '../pages/event-details/event-details.module';
import { EventRegistrationPage } from '../pages/event-registration/event-registration';
import { EventRegistrationPageModule } from '../pages/event-registration/event-registration.module';
import { AdminPageModule } from '../pages/admin/admin.module';
import { AdminPage } from '../pages/admin/admin';
import { AdminEventsPage } from '../pages/admin-events/admin-events';
import { AdminEventsPageModule } from '../pages/admin-events/admin-events.module';
import { AddEventPageModule } from '../pages/add-event/add-event.module';
import { EditEventPageModule } from '../pages/edit-event/edit-event.module';
import { EditEventPage } from '../pages/edit-event/edit-event';
import { AddEventPage } from '../pages/add-event/add-event';
import { Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Tab1,
  ],
  imports: [
    IonicModule,
    CommonModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AdminPageModule,
    AdminEventsPageModule,
    AddEventPageModule,
    EditEventPageModule,
    AboutUsPageModule,
    ConferencesPageModule,
    EventCategoriesPageModule,
    EventModalPageModule,
    EventDetailsPageModule,
    EventRegistrationPageModule,
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
    AdminPage,
    AdminEventsPage,
    AddEventPage,
    EditEventPage,
    ProfilePage,
    LandingPage,
    LoginPage,
    RegisterPage,
    EventCategoriesPage,
    AllEventsPage,
    ConferencesPage,
    MasterclassesPage,
    EventModalPage,
    EventDetailsPage,
    EventRegistrationPage,
    SpeakersPage,
    SpeakerModalPage,
    AboutUsPage,
    PartnershipsPage,
    EventsPage,
    Tab1,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Camera,
    ImagePicker,
  ]
})
export class AppModule { }
