import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyDsko0pVhU6R_RZTROJdecOuMszZ7jcwYI",
    authDomain: "marryholy.firebaseapp.com",
    projectId: "marryholy",
    storageBucket: "marryholy.appspot.com",
    messagingSenderId: "580948972031",
    appId: "1:580948972031:web:b1d81d9538e9612435d7ca"
  });



  export const auth = firebase.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  
  export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
      console.log(res.user)
    }).catch((error) => {
      console.log(error.message)
    })
  }




