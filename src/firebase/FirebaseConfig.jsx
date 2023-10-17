// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBopza4esxBM683nPmwRe0aS3kQl5hSXXA",
  authDomain: "blog-post-74295.firebaseapp.com",
  projectId: "blog-post-74295",
  storageBucket: "blog-post-74295.appspot.com",
  messagingSenderId: "387440318932",
  appId: "1:387440318932:web:57ea5c8c5c9f8305395e41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage };
