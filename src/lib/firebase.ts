// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0sAgjT6T7FygylJ4Xki3wMDCRfMdjOG4",
    authDomain: "ihhi-ab7b5.firebaseapp.com",
    projectId: "ihhi-ab7b5",
    storageBucket: "ihhi-ab7b5.firebasestorage.app",
    messagingSenderId: "218653825079",
    appId: "1:218653825079:web:3d8a889af3dca9585b47b2",
    measurementId: "G-TRH9FTTX0F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);