import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAu78b5J6QroQsQrm-XMu08V_lbpIkwTU0",
    authDomain: "ig-reels-clone-df890.firebaseapp.com",
    databaseURL: "https://ig-reels-clone-df890.firebaseio.com",
    projectId: "ig-reels-clone-df890",
    storageBucket: "ig-reels-clone-df890.appspot.com",
    messagingSenderId: "521580085548",
    appId: "1:521580085548:web:492e94de2739f7aa4cac89",
    measurementId: "G-DVME5417W7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;