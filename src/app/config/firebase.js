import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBlnhndJEKYc9bjT-m_bcNA5MPIJCW94aE",
    authDomain: "revents-258711.firebaseapp.com",
    databaseURL: "https://revents-258711.firebaseio.com",
    projectId: "revents-258711",
    storageBucket: "revents-258711.appspot.com",
    messagingSenderId: "689719945944",
    appId: "1:689719945944:web:6590ba89477894418bc5ad"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;