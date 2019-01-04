import firebase from "firebase";
import 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyDaeq6pWypJAOuhJnPt0onwvuiQl1fk6tA",
    authDomain: "chi-project-database.firebaseapp.com",
    databaseURL: "https://chi-project-database.firebaseio.com",
    projectId: "chi-project-database",
    storageBucket: "chi-project-database.appspot.com",
    messagingSenderId: "236311664811"
  };
  firebase.initializeApp(firebaseConfig);
//   const db = firebase.firestore();
//   db.settings({ timestampsInSnapshots: true });