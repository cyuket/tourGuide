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
    let changes = snapshot.docs;
    if (changes.length) {
        changes.forEach(change => {
            // console.log(change.doc.data());
            setupTable(change);
        });
    } else {
      tableBody.innerHTML = '<h5 class="center-align"> No Location added</h5'
    }
    
});