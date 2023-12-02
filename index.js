// Import stylesheets
// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";

// Agregue los productos y métodos de Firebase que desee utilizar
import {getAuth, EmailAuthProvider,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import {getFirestore, addDoc, collection, query, orderBy, onSnapshot,
  doc, setDoc, where } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
import firebaseui from "https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js";
//import firebase from 'firebase/compat/app';
//import 'firebaseui/dist/firebaseui.css'
// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

let rsvpListener = null;
let guestbookListener = null;

let db, auth;

async function main() {
// Agregue el objeto de configuración del proyecto Firebase aquí
 const firebaseConfig = {
    apiKey: 'AIzaSyAzeh_cgqUUh0GAVxR4kOM_IMS1ny74spY',
    authDomain: 'fir-web-codelab-8a804.firebaseapp.com',
    projectId: 'fir-web-codelab-8a804',
    storageBucket: 'fir-web-codelab-8a804.appspot.com',
    messagingSenderId: '989847580250',
    appId: '1:989847580250:web:f0a448c56038244a54b263',
  };
// Inicializar Firebase
  initializeApp(firebaseConfig);
  auth = getAuth();


  // FirebaseUI config
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      // Email / Password Provider.
      EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      },
    },
  };
// Inicialice el widget FirebaseUI usando Firebase
const ui = new firebaseui.auth.AuthUI(auth);
// Escuche los clics del botón Confirmar asistencia
startRsvpButton.addEventListener("click",
() => {
     ui.start("#firebaseui-auth-container", uiConfig);
});
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

}
main();
