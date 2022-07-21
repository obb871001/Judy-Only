import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'


const firebastConfig ={
    apiKey: "AIzaSyB3MYqOndeZD3TEjAkJFp9t93MQT0kSCz0",
    authDomain: "mychat-7b508.firebaseapp.com",
    projectId: "mychat-7b508",
    storageBucket: "mychat-7b508.appspot.com",
    messagingSenderId: "263827887615",
    appId: "1:263827887615:web:996c2c9cc213221e8d03ca",
    measurementId: "G-BDHXK46C45"

};


const app = initializeApp(firebastConfig);

export const db = getFirestore()