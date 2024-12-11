// src/components/Firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyArZqDkz444WoBQEt0-mJfJAR_fWo1uitQ"
  authDomain: "shop-777-4c502.firebaseapp.com",
  projectId: "shop-777-4c502",
  storageBucket: "shop-777-4c502.appspot.com",
  messagingSenderId: "184696219816",
  appId: "1:184696219816:web:419e396935ce95e4daba9d",
  measurementId: "G-T15S69PNNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, firestore, analytics };
