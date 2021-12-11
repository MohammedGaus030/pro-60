import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBPRp6Fp33p89C9yQGnT0rB5bgtNihDD1c",
  authDomain: "attendence-4685c.firebaseapp.com",
  projectId: "attendence-4685c",
  storageBucket: "attendence-4685c.appspot.com",
  messagingSenderId: "881351892593",
  appId: "1:881351892593:web:a859aad3ae31ce6f19c5d0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();