let pendingButton = document.querySelector("#pending");
let allButton = document.querySelector("#all");
let confirmedButton = document.querySelector("#confirmed");
let declinedButton = document.querySelector("#declined");
let checkoutButton = document.querySelector("#checkout");
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
let userCount = document.querySelector("#userCount");
let bookingCount = document.querySelector('#bookingCount');
let tourCount = document.querySelector("#tourCount");
db.collection('users').onSnapshot(snapshot => {
   
    let changes = snapshot.docs;
    userCount.textContent = changes.length

});
db.collection('tourLocation').onSnapshot(snapshot => {

    let changes = snapshot.docs;
    tourCount.textContent = changes.length

});
db.collection('bookings').onSnapshot(snapshot => {

    let changes = snapshot.docs;
    bookingCount.textContent = changes.length

});