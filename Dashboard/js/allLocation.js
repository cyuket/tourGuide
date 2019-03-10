var config = {
    apiKey: "AIzaSyCypRAWS-lk8taWYUUgvNDWCdxabyRclIc",
    authDomain: "travel-28.firebaseapp.com",
    databaseURL: "https://travel-28.firebaseio.com",
    projectId: "travel-28",
    storageBucket: "travel-28.appspot.com",
    messagingSenderId: "304303818510"
};
firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();
const storage = firebase.storage();
db.collection('tourLocation').onSnapshot(snapshot => {
     // console.log(snapshot.docs);
     //let data = snapshot.docs.data();
     setupTable(snapshot.docs);
 }, err => {
     console.log(err.message)
 });