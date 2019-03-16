let id = window.location.search.split("?")[1]
const state = document.querySelector("#state");
const days = document.querySelector("#days");
const bprice = document.querySelector("#bprice");
const bookingDiv = document.querySelector("#bookingDiv");
const category = document.querySelector("#category");
const dImg1 = document.querySelector("#dImg1")
const dImg2 = document.querySelector("#dImg2")
const dImg3 = document.querySelector("#dImg3")
const dImg4 = document.querySelector("#dImg4")
const dImg5 = document.querySelector("#dImg5")
const dImg6 = document.querySelector("#dImg6")

const aImg1 = document.querySelector("#aImg1")
const aImg2 = document.querySelector("#aImg2")
const aImg3 = document.querySelector("#aImg3")
const aImg4 = document.querySelector("#aImg4")
const aImg5 = document.querySelector("#aImg5")
const aImg6 = document.querySelector("#aImg6")

const carImg1 = document.querySelector("#carImg1")
const carImg2 = document.querySelector("#carImg2")
const carImg3 = document.querySelector("#carImg3")
const carImg4 = document.querySelector("#carImg4")
const carImg5 = document.querySelector("#carImg5")
const carImg6 = document.querySelector("#carImg6")
const carousel = document.querySelector("#carousel1");
const description = document.querySelector("#tab-description");
let geocoder = new google.maps.Geocoder();
let mapDisplay = document.querySelector("#mapDisplay")
var map;
let priceAmount
let paystackEmail
let tourName
let usersId
console.log(id)

db.collection('tourLocation').doc(id).onSnapshot(snapshot => {

    let data = snapshot.data()
    setupDetail(data);
}, err => {
    console.log(err.message)
});

const setupDetail = (data) => {
    let address = data.location
    // maps confiquration
    geocoder.geocode({
        'address': address
    }, function (results, status) {
        if (status == 'OK') {
            var mapOptions = {
                zoom: 10,
                //  center: latlng
            }
            map = new google.maps.Map(mapDisplay, mapOptions);
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
    const extraImage = data.extraImageUrl
    dImg1.src = extraImage.image0
    dImg2.src = extraImage.image1
    dImg3.src = extraImage.image2
    dImg4.src = extraImage.image3
    dImg5.src = extraImage.image4
    dImg6.src = extraImage.image5

    aImg1.href = extraImage.image0
    aImg2.href = extraImage.image1
    aImg3.href = extraImage.image2
    aImg4.href = extraImage.image3
    aImg5.href = extraImage.image4
    aImg6.href = extraImage.image5

    carImg1.src = extraImage.image0
    carImg2.src = extraImage.image1
    carImg3.src = extraImage.image2
    carImg4.src = extraImage.image3
    carImg5.src = extraImage.image4
    carImg6.src = extraImage.image5
    state.innerHTML = data.selectedState;
    days.innerHTML = `${data.days} DAYS`;
    category.innerHTML = data.selectedTourType;
    description.innerHTML = data.decription
    bprice.innerHTML = data.price
    priceAmount = data.price * 100;
    tourName = data.tourName

}
// popular tour section
const relatedTour = document.querySelector("#relatedTour");
const displayPopular = (data) => {

    //console.log(tours)
    let html = ``

    for (let i = 0; i < 3; i++) {
        let id = data[i].id
        const detail = data[i].data();
        const div = `<li class="item-tour col-md-4 col-sm-6 product">
											<div class="item_border item-product">
												<div class="post_images">
													<a href="./single-tour.html?${id}">
														<span class="price">₦ ${detail.price}</span>
														<img src=${detail.featuredImageUrl} alt="" title="" style= "height: 150px;">
													</a>
													
												</div>
												<div class="wrapper_content">
													<div class="post_title">
														<h4>
															<a href="./single-tour.html?${id}" rel="bookmark">${detail.tourName}</a>
														</h4>
													</div>
													<span class="post_date">${detail.days} DAYS</span>
													<div class="description">
													</div>
												</div>
												<div class="read_more">
													<div class="item_rating">
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star-o"></i>
													</div>
													<a rel="nofollow" href="./single-tour.html?${id}" class="button product_type_tour_phys add_to_cart_button">Read
														more</a>
												</div>
											</div>
										</li>`
        html += div
    }

    relatedTour.innerHTML = html;
}
db.collection('tourLocation').onSnapshot(snapshot => {
    //  console.log(snapshot.docs.id);
    let data = snapshot.docs;
    tours = data
    displayPopular(data);
}, err => {
    console.log(err.message)
});

// reviews form 
const commentForm = document.querySelector("#commentForm")
commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const author = commentForm['author'].value
    const email = commentForm['email'].value
    const comment = commentForm['comment'].value
    const created = new Date()
    db.collection('reviews').doc().set({
            id,
            author,
            email,
            comment,
            created: firebase.firestore.Timestamp.fromDate(new Date())
        })
        .then(() => {
            alert("Your Reviews has been Added");

            commentForm.reset()
        })
})

// displaying og review
const reviews = document.querySelector(".review-content");
const reviewNo = document.querySelector("#reviewNo")
const setupReviews = (data) => {
    if (data.length) {
        let html = ``
        reviewNo.innerHTML = `Reviews ( ${data.length} )`
        data.forEach(item => {
            const detail = item.data();
            const d = detail.created
            const date = new Date(d)
            // console.log(d)
            const div = `<div id="comments">
                        <h2 class="travel_tour-Reviews-title">Review from
                            <strong><span>${detail.author}</span></strong></h2>
                        <ol class="commentlist">
                            <li  class="comment byuser comment-author-physcode bypostauthor even thread-even depth-1"
                                id="li-comment-62">
                                <div id="comment-62" class="comment_container">
                                    <!-- <img alt="" src="images/avata.jpg" class="avatar avatar-60 photo" height="60" width="60"> -->
                                    <div class="comment-text">
                                        
                                        <p class="meta">
                                            <strong>${detail.email}</strong>
                                            <time datetime="2017-01-24T03:54:04+00:00"></time>
                                            :
                                        </p>
                                        <div class="description">
                                            <p>${detail.comment}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>`
            html += div
        })

        reviews.innerHTML = html;
    } else {
        reviews.innerHTML = `<h2> No Reviews </h2>`
    }

}

// setupReviews()
db.collection('reviews').where("id", "==", id).onSnapshot(snapshot => {
    //console.log(snapshot.docs.id);
    let data = snapshot.docs;
    setupReviews(data);
}, err => {
    console.log(err.message)
});
const body = jQuery('body');
const tourBookingForm = document.querySelector("#tourBookingForm");
tourBookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const textBooked = document.querySelector("#booked")
    const first_name = tourBookingForm['first_name'].value
    const last_name = tourBookingForm['last_name'].value
    const email_tour = tourBookingForm['email_tour'].value
    paystackEmail = email_tour;
    const phone = tourBookingForm['phone'].value
    const date_book = tourBookingForm['date_book'].value
    let userId = sessionStorage.getItem("userId");
    usersId = userId
    if (userId) {

        //console.log(date_book)
        var handler = PaystackPop.setup({
            key: 'pk_test_2e64c101c3bdb894f318373c55b33615e9e112d6', //put your public key here
            //key: 'pk_test_d7f7b7768e7a11567836a91b2c298ca41b33f72f',
            email: paystackEmail, //put your customer's email here
            amount: priceAmount, //amount the customer is supposed to pay
            metadata: {
                custom_fields: [{
                    display_name: "Mobile Number",
                    variable_name: "mobile_number",
                    value: phone //customer's mobile number
                }]
            },
            callback: function (response) {

                db.collection('bookings').doc().set({
                        first_name,
                        last_name,
                        paystackEmail,
                        last_name,
                        phone,
                        date_book,
                        userId,
                        id,
                        tourName
                    })
                    .then(() => {
                        textBooked.innerHTML = `<h4> You Have Made Reservation</h4>`
                        tourBookingForm.reset();
                        bookingDiv.style.display = 'none'
                    })

            },
            onClose: function () {
                //when the user close the payment modal
                alert('Transaction cancelled');
                // document.getElementById('id03').style.display = "none";
            }
        });
        handler.openIframe()

    } else {
        //  jQuery('#tourBookingForm').on('click', function (e) {
        body.addClass("show_form_popup_login");
        //  });
    }


    let signupForm = document.querySelector('#register')
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = signupForm['reg_email'].value
        const password = signupForm['reg_password'].value
        const username = signupForm['reg_username'].value
        const firstName = signupForm['reg_firstName'].value
        const lastName = signupForm['reg_lastName'].value

        // if (password == cpassword) {
        //signup a user
        auth.createUserWithEmailAndPassword(email, password)
            .then(cred => {
                sessionStorage.setItem("userId", cred.user.uid)
                let userId = sessionStorage.getItem("userId");
                usersId = userId
                return db.collection('users').doc(cred.user.uid).set({
                    email,
                    username,
                    lastName,
                    firstName,
                    userId: cred.user.uid
                });

            }).then(() => {

                //body.removeClass("show_form_popup_register");
                signupForm.reset();
                var handler = PaystackPop.setup({
                    key: 'pk_test_2e64c101c3bdb894f318373c55b33615e9e112d6', //put your public key here
                    //key: 'pk_test_d7f7b7768e7a11567836a91b2c298ca41b33f72f',
                    email: paystackEmail, //put your customer's email here
                    amount: priceAmount, //amount the customer is supposed to pay
                    metadata: {
                        custom_fields: [{
                            display_name: "Mobile Number",
                            variable_name: "mobile_number",
                            value: phone //customer's mobile number
                        }]
                    },
                    callback: function (response) {

                        db.collection('bookings').doc().set({
                                first_name,
                                last_name,
                                paystackEmail,
                                last_name,
                                phone,
                                date_book,
                                userId,
                                id,
                                tourName
                            })
                            .then(() => {
                                textBooked.innerHTML = `<h4> You Have Made Reservation</h4>`
                                tourBookingForm.reset()
                                bookingDiv.style.display = 'none'
                            })

                    },
                    onClose: function () {
                        //when the user close the payment modal
                        alert('Transaction cancelled');
                        // document.getElementById('id03').style.display = "none";
                    }
                });
                handler.openIframe()
            })
        // }


    })

    //login
    const loginForm = document.querySelector('#loginform');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm['user_login'].value
        const password = loginForm['user_pass'].value

        //console.log(email, password)
        auth.signInWithEmailAndPassword(email, password).then(cred => {
            sessionStorage.setItem("userId", cred.user.uid)

            let userId = sessionStorage.getItem("userId");

            usersId = userId
            console.log(usersId)
            let currentUser = firebase.auth().currentUser.email;
            let currentUserSession = sessionStorage.setItem("user", currentUser);
            let currentUserId = sessionStorage.setItem("userId", userId);
            var handler = PaystackPop.setup({
                key: 'pk_test_2e64c101c3bdb894f318373c55b33615e9e112d6', //put your public key here
                //key: 'pk_test_d7f7b7768e7a11567836a91b2c298ca41b33f72f',
                email: paystackEmail, //put your customer's email here
                amount: priceAmount, //amount the customer is supposed to pay
                metadata: {
                    custom_fields: [{
                        display_name: "Mobile Number",
                        variable_name: "mobile_number",
                        value: phone //customer's mobile number
                    }]
                },
                callback: function (response) {

                    db.collection('bookings').doc().set({
                            first_name,
                            last_name,
                            paystackEmail,
                            last_name,
                            phone,
                            date_book,
                            userId,
                            id,
                            tourName
                        })
                        .then(() => {
                            textBooked.innerHTML = `<h4> You Have Made Reservation</h4>`
                            tourBookingForm.reset()
                            bookingDiv.style.display = 'none'
                        })

                },
                onClose: function () {
                    //when the user close the payment modal
                    alert('Transaction cancelled');
                    // document.getElementById('id03').style.display = "none";
                }
            });
            handler.openIframe()
            loginForm.reset();
        })
    })


})
const tableBody = document.querySelector("#tableBody")
const setupTable = (data) => {
    if (data.length) {
        let html = "";
        data.forEach(docs => {
            const detail = docs.data();
            //console.log(detail)
            const td = `<tr>
                            <td><a href="./single-tour.html?${detail.id}">${detail.tourName} </a></td>
                            <td>${detail.date_book}</td>
                        </tr>`;
            html += td;
        });
        tableBody.innerHTML = html
    } else {
        bookingDiv.style.display = 'block'

        tableBody.innerHTML = `<h5 class="center-align"> You Don't have any reservation </h5>`
    }

}
let userId = sessionStorage.getItem("userId");

usersId = userId
console.log(usersId)
// console.log(usersId)
db.collection('bookings').where("userId", "==", usersId).onSnapshot(snapshot => {
    //console.log(snapshot.docs.id);
    let data = snapshot.docs;
    setupTable(data);
    if (data.length > 0) {
        db.collection('bookings').where("id", "==", id).onSnapshot(snapshot => {
            //console.log(snapshot.docs.id);
            let data = snapshot.docs;
            if (data.length > 0) {
                bookingDiv.style.display = 'none'
            }

        }, err => {
            console.log(err.message)
        });
    }
}, err => {
    console.log(err.message)
});