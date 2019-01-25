import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

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
import { EventsListPage } from '../pages/events-list/events-list';
import { EventsListPageModule } from '../pages/events-list/events-list.module';
import { LeadershipPage } from '../pages/leadership/leadership';
import { LeadershipPageModule } from '../pages/leadership/leadership.module';
import { EventModalPage } from '../pages/event-modal/event-modal';
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
import { ProgrammePage } from '../pages/programme/programme';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	ListPage,
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
	EventsListPageModule,
	LeadershipPageModule,
	LoginPageModule,
	MasterclassesPageModule,
	PartnershipsPageModule,
	ProfilePageModule,
	RegisterPageModule,
	SpeakerModalPageModule,
	SpeakersPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    LoginPage,
    RegisterPage,
    EventCategoriesPage,
    EventsListPage,
    ConferencesPage,
    ProgrammePage,
    SpeakersPage,
    SpeakerModalPage,
    MasterclassesPage,
    LeadershipPage,
    EventModalPage,
    AboutUsPage,
    PartnershipsPage,
	EventsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
