import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBgaoc_8HjFS333uhbpjvYz2lfIld62FYk",
    authDomain: "lifedev-icoma.firebaseapp.com",
    projectId: "lifedev-icoma",
    storageBucket: "lifedev-icoma.firebasestorage.app",
    messagingSenderId: "652379164002",
    appId: "1:652379164002:web:442fd1fba8292fd873b03b",
    measurementId: "G-9WPGGKDGRS"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }