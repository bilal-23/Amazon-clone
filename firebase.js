import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.APP_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyA7BVjCkJeb71iBburnPG6HN5sUf49jGgo",
    authDomain: "clone-a9232.firebaseapp.com",
    projectId: "clone-a9232",
    storageBucket: "clone-a9232.appspot.com",
    messagingSenderId: "52724536750",
    appId: "1:52724536750:web:5499848b79c06d843fa43f"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore()

export default db