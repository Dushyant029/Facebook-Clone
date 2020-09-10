import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBBEzLZCiKMdOB3T_vTUU7mCAraztWDU1Q",
    authDomain: "facebook-clone-af5ae.firebaseapp.com",
    databaseURL: "https://facebook-clone-af5ae.firebaseio.com",
    projectId: "facebook-clone-af5ae",
    storageBucket: "facebook-clone-af5ae.appspot.com",
    messagingSenderId: "385696114855",
    appId: "1:385696114855:web:de890dc901b86bbf3b1382",
    measurementId: "G-9VP01NDSXJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;