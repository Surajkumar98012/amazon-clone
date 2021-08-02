import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDcW-E8ptOxceuuuO8QGcasqQEbT20utbQ",
    authDomain: "clone-40943.firebaseapp.com",
    projectId: "clone-40943",
    storageBucket: "clone-40943.appspot.com",
    messagingSenderId: "33995343126",
    appId: "1:33995343126:web:25455405d0c4ccd6ae7c37"
  };

  const app = !firebase.apps.length
   ? firebase.initializeApp(firebaseConfig)
   :firebase.app()

   const db =app.firestore()
   export default db;