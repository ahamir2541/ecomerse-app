import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDf2_pSeMUu7FJsN_eCyfty0M_I9mICCcM",
    authDomain: "auth-c1ebc.firebaseapp.com",
    databaseURL: "https://auth-c1ebc.firebaseio.com",
    projectId: "auth-c1ebc",
    storageBucket: "auth-c1ebc.appspot.com",
    messagingSenderId: "109210776005",
    appId: "1:109210776005:web:5d242452dc0c8590941bac",
    measurementId: "G-2KHNZMB61F"
  };

  export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists){
      const { displayName, email } = userAuth
      const createdAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch (error) {
        console.log('error creating user', error.message)
      }

    }

    return userRef

  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider  = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase
