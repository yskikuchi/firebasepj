import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
    apiKey: "AIzaSyC4q6ow9ahdKgGzGI5vpPtBHOkYrI365ZM",
    authDomain: "fir-pj-f16ad.firebaseapp.com",
    projectId: "fir-pj-f16ad",
    storageBucket: "fir-pj-f16ad.appspot.com",
    messagingSenderId: "198255290335",
    appId: "1:198255290335:web:62185ee67b09466110866a",
    measurementId: "G-W0JMKGHZGJ"
    }
  )
}
  
export default firebase