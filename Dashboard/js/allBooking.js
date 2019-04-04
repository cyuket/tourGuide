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
db.collection('bookings').onSnapshot(snapshot => {
    tableBody.innerHTML = ""
    let changes = snapshot.docs;
    if (changes.length) {
        changes.forEach(change => {
            // console.log(change.doc.data());
            setupTable(change);
        });
    } else {
        tableBody.innerHTML = '<h5 class="center-align"> No Bookings</h5'
    }

});

pendingButton.addEventListener('click', () => {
    tableBody.innerHTML = ""
    db.collection('bookings').where("status", "==", "Pending").onSnapshot(snapshot => {
        let changes = snapshot.docs;
        if (changes.length) {
            changes.forEach(change => {
                setupTable(change);
            });
        } else {
            tableBody.innerHTML = '<h5 class="center-align"> No Pending Bookings</h5'
        }

    });
})
confirmedButton.addEventListener('click', () => {
    tableBody.innerHTML = ""
    db.collection('bookings').where("status", "==", "Confirmed").onSnapshot(snapshot => {
        let changes = snapshot.docs;
        if (changes.length) {
            changes.forEach(change => {
                // console.log(change.doc.data());
                setupTable(change);
            });
        } else {
            tableBody.innerHTML = '<h5 class="center-align"> No Confirmed Bookings</h5'
        }

    });
})

declinedButton.addEventListener('click', () => {
    tableBody.innerHTML = ""
    db.collection('bookings').where("status", "==", "Declined").onSnapshot(snapshot => {
        let changes = snapshot.docs;
        if (changes.length) {
            changes.forEach(change => {
                // console.log(change.doc.data());
                setupTable(change);
            });
        } else {
            tableBody.innerHTML = '<h5 class="center-align"> No Declined Bookings</h5'
        }

    });
})
checkoutButton.addEventListener('click', () => {
    tableBody.innerHTML = ""
    db.collection('bookings').where("status", "==", "Checkedout").onSnapshot(snapshot => {
        let changes = snapshot.docs;
        if (changes.length) {
            changes.forEach(change => {
                // console.log(change.doc.data());
                setupTable(change);
            });
        } else {
            tableBody.innerHTML = '<h5 class="center-align"> No Checkout Bookings</h5'
        }

    });
})
allButton.addEventListener('click', () => {
    tableBody.innerHTML = ""
    db.collection('bookings').onSnapshot(snapshot => {
        let changes = snapshot.docs;
        if (changes.length) {
            changes.forEach(change => {
                // console.log(change.doc.data());
                setupTable(change);
            });
        } else {
            tableBody.innerHTML = '<h5 class="center-align"> No Bookings</h5'
        }

    });
})