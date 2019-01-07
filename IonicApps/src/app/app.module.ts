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

import EventsPage from '../pages/events/events';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { EventCategoriesPage } from '../pages/event-categories/event-categories';
import { ConferencesPage } from '../pages/conferences/conferences';
import { MasterclassesPage } from '../pages/masterclasses/masterclasses';
import { EventsListPage } from '../pages/events-list/events-list';
import { LeadershipPage } from '../pages/leadership/leadership';
import { EventModalPage } from '../pages/event-modal/event-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    EventCategoriesPage,
    EventsListPage,
    ConferencesPage,
    MasterclassesPage,
    LeadershipPage,
    EventModalPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    EventCategoriesPage,
    EventsListPage,
    ConferencesPage,
    MasterclassesPage,
    LeadershipPage,
    EventModalPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
