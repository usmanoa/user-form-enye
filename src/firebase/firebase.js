import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDJ1ZopffVGRfSnauqc-LMywU44byYkIpA",
    authDomain: "userformenye.firebaseapp.com",
    databaseURL: "https://userformenye.firebaseio.com",
    projectId: "userformenye",
    storageBucket: "userformenye.appspot.com",
    messagingSenderId: "610423094470",
    appId: "1:610423094470:web:812fccdb091a637bd5ebc7",
    measurementId: "G-E14YNLSNK8"
  };

firebase.initializeApp(firebaseConfig);
export const database = firebase.database();