import firebase from "firebase";


const firebaseApp =firebase.initializeApp({
    
        apiKey: "AIzaSyCqWEqrzelkwHvlsz3-W6aYxicz4Ei6vbk",
        authDomain: "clone-2f7ef.firebaseapp.com",
        databaseURL: "https://clone-2f7ef.firebaseio.com",
        projectId: "clone-2f7ef",
        storageBucket: "clone-2f7ef.appspot.com",
        messagingSenderId: "982904092663",
        appId: "1:982904092663:web:16aefcc50ea7235cf160f2",
        measurementId: "G-5ZH7E1ZEWX"
      
});

const db = firebase.firestore();
const auth = firebase.auth();

export {db,auth};