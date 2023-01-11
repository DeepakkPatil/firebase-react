import firebase  from 'firebase';
import 'firebase/firestore' ;


const firebaseConfig = {
  apiKey: "AIzaSyDZqBg5SrvJcX0UBOzoPYaksZ8f1tsoIXQ",
  authDomain: "reactblog-a06b8.firebaseapp.com",
  projectId: "reactblog-a06b8",
  storageBucket: "reactblog-a06b8.appspot.com",
  messagingSenderId: "661025650037",
  appId: "1:661025650037:web:b9994e74c42d22a92e8f3c"
};

firebase.initializeApp(firebaseConfig);

export const firestore=firebase.firestore() ;