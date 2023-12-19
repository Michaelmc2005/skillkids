// firebaseconfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMyTUTICWgHAFYLeTD9Chsn5HaTulkMCk",
  authDomain: "skillkids-8a974.firebaseapp.com",
  projectId: "skillkids-8a974",
  storageBucket: "skillkids-8a974.appspot.com",
  messagingSenderId: "625511086481",
  appId: "1:625511086481:web:170b37485a37e915af8230",
  measurementId: "G-HBHNKFSDKF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };