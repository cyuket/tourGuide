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
  };
  firebase.initializeApp(config);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const functions = firebase.functions();
  const storage = firebase.storage();

let featuredImageUrl;
const upload_widget = document.querySelector("#featuredImage");

var myWidget = cloudinary.createUploadWidget({
    cloud_name: 'cyuket',
    upload_preset: 'cyuket',
    maxFiles: 1
}, (error, result) => {
    featuredImageUrl = result[0].url;
    document.querySelector("#imageURL0").src = result[0].url;

})

upload_widget.addEventListener("click", function () {
    myWidget.open();
}, false);



//Uploading extra images to cloudinary

let extraImageUrl0
let extraImageUrl1
let extraImageUrl2
let extraImageUrl3
let extraImageUrl4
let extraImageUrl5
const extraImage = document.querySelector("#extraImage");

var extraWidget = cloudinary.createUploadWidget({
    cloud_name: 'cyuket',
    upload_preset: 'cyuket',
    maxFiles: 6
}, (error, result) => {
    extraImageUrl0 = result[0].url
    extraImageUrl1 = result[1].url
    extraImageUrl2 = result[2].url
    extraImageUrl3 = result[3].url
    extraImageUrl4 = result[4].url
    extraImageUrl5 = result[5].url

    document.querySelector("#imageURL1").src = result[0].url;
    document.querySelector("#imageURL2").src = result[1].url;
    document.querySelector("#imageURL3").src = result[2].url;
    document.querySelector("#imageURL4").src = result[3].url;
    document.querySelector("#imageURL5").src = result[4].url;
    document.querySelector("#imageURL6").src = result[5].url;
})

extraImage.addEventListener("click", function () {
    extraWidget.open();
}, false);



//uploading the database
const locationForm = document.querySelector(".locationForm");

locationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const tourType = document.querySelector("#tourType");
    const state = document.querySelector("#state");
    const tourName = locationForm['tName'].value;
    const days = locationForm['tDays'].value;
    const price = locationForm['tprice'].value;
    const location = locationForm['tLocation'].value;
    const decription = document.querySelector('#editor1').value
    const selectedTourType = tourType.options[tourType.selectedIndex].text;
    const selectedState = state.options[state.selectedIndex].text
    console.log(decription)

    db.collection('tourLocation').doc().set({
            tourName,
            days,
            price,
            location,
            decription,
            selectedState,
            selectedTourType,
            featuredImageUrl,
            extraImageUrl: {
                image0: extraImageUrl0,
                image1: extraImageUrl1,
                image2: extraImageUrl2,
                image3: extraImageUrl3,
                image4: extraImageUrl4,
                image5: extraImageUrl5
            }
        })
        .then(() => {
            window.location.href = "./allLocation.html";
        })


})
