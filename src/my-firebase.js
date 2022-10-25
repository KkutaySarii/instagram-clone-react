import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-hot-toast";
import { userHandle } from "./utils";

const firebaseConfig = {
    apiKey: "AIzaSyDXDgmVLIiJ3nXb12-xaJgbVvkjsolCHlQ",
    authDomain: "kutay-instagram-clone.firebaseapp.com",
    projectId: "kutay-instagram-clone",
    storageBucket: "kutay-instagram-clone.appspot.com",
    messagingSenderId: "225760089894",
    appId: "1:225760089894:web:a8db82adbe6cbbc85813e7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();


onAuthStateChanged(auth, user => {
    if (user) {
        userHandle(user ? user.email : false)
    }
})

signOut(auth).then(() => {
    // Sign-out successful.
}).catch((error) => {
    // An error happened.
});

export const logout = async () => {
    try {
        const response = await signOut(auth);
        return true;
    }
    catch (err) {
        toast.error(err.code);
        return false;
    }
}

export const login = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        return true
    } catch (err) {
        toast.error((err.code));
        return false
    }
}