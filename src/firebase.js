import firebase from "firebase/compat/app"
import "firebase/compat/database"

const firebaseConfig = {
	apiKey: "AIzaSyC5exzq24a6zgMPRyrXg-LlIWz4eR-GmLs",
	authDomain: "ai-website-ee5b5.firebaseapp.com",
	dbURL: "https://ai-website-ee5b5-default-rtdb.firebaseio.com/",
	projectId: "ai-website-ee5b5",
	storageBucket: "ai-website-ee5b5.appspot.com",
	messagingSenderId: "853656605284",
	appId: "1:853656605284:web:e203150a58a4060a568571",
}

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig)
const db = fireDb.database()

const getData = async (path) => {
	const snapshot = await db.ref(path).once("value")
	return snapshot.val()
}

export default getData
