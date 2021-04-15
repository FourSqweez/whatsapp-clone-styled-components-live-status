import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBvIgj7dbscO3S8UR6_poUzhDaJQQ7jN1Q',
  authDomain: 'whatsapp-2-66a1a.firebaseapp.com',
  projectId: 'whatsapp-2-66a1a',
  storageBucket: 'whatsapp-2-66a1a.appspot.com',
  messagingSenderId: '288960062917',
  appId: '1:288960062917:web:be6db1ffcbd151475857ac',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = firebase.app.firestore()
const auth = app.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
