import firebase from "firebase/compat/app"
import "firebase/compat/database"

const firebaseConfig = {
	apiKey: "AIzaSyCQ-ptwgriECFfZwHLEMz2wRX9LQOlQwW8",
	authDomain: "cie-air.firebaseapp.com",
	databaseURL: "https://cie-air-default-rtdb.firebaseio.com",
	projectId: "cie-air",
	storageBucket: "cie-air.appspot.com",
	messagingSenderId: "510902931789",
	appId: "1:510902931789:web:15cfe0e60f3c3344aa6704"
  };

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig)
const db = fireDb.database()

const getData = async (path) => {
	const snapshot = await db.ref(path).once("value")
	return snapshot.val()
}

export default getData
