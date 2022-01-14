import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAo8ECwuLAgPCXn0yDYHnW0vhPCRwF47pI",
  authDomain: "slack-clone-4cbe0.firebaseapp.com",
  projectId: "slack-clone-4cbe0",
  storageBucket: "slack-clone-4cbe0.appspot.com",
  messagingSenderId: "432554950959",
  appId: "1:432554950959:web:fee9f4af752256403961da",
  measurementId: "G-MXTPXH0TGE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
