import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyBTAqDEn6To7GHHa97xkQFNq3R4VXFP9mE',
    authDomain: 'signinfirebase-9df2b.firebaseapp.com',
    projectId: 'signinfirebase-9df2b',
    storageBucket: 'signinfirebase-9df2b.appspot.com',
    messagingSenderId: '263611982196',
    appId: '1:263611982196:android:f97ebdb0a7f3607e1c0c21',
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;