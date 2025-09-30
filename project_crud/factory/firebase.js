import Firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCe1fF-wrNxDM1oykk8zH1ItiXVFJMCkG0",
  authDomain: "projeto-banco-7da16.firebaseapp.com",
  projectId: "projeto-banco-7da16",
  storageBucket: "projeto-banco-7da16.firebasestorage.app",
  messagingSenderId: "988202667245",
  appId: "1:988202667245:web:581f9dfbc1650218e750e4",
  measurementId: "G-TEKDL32DXK"
};

if(!Firebase.apps.length){
  Firebase.initializeApp(firebaseConfig);
}else{
  Firebase.app();
}
export default Firebase;

