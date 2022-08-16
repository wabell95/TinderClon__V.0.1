import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBIWTQQcrjdxsjixKPbS_palctF0BhAo74",
  authDomain: "tinder-clon-react.firebaseapp.com",
  projectId: "tinder-clon-react",
  storageBucket: "tinder-clon-react.appspot.com",
  messagingSenderId: "148833317074",
  appId: "1:148833317074:web:80a118d9841d3e5f317d0b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;