let id = window.location.search.split("?")[1]
const state = document.querySelector("#state");
const days = document.querySelector("#days");
const bprice = document.querySelector("#bprice");
const category = document.querySelector("#category");
// const slider = document.querySelector("#slider");
const carousel = document.querySelector("#carousel1");
const description = document.querySelector("#tab-description");
let geocoder = new google.maps.Geocoder();
let mapDisplay = document.querySelector("#mapDisplay")
var map;

console.log(id)

db.collection('tourLocation').doc(id).onSnapshot(snapshot => {

    let data = snapshot.data()
    setupDetail(data);
}, err => {
    console.log(err.message)
});

const setupDetail = (data) => {
    let address = data.location
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
    state.innerHTML = data.selectedState;
    days.innerHTML = `${data.days} DAYS`;
    category.innerHTML = data.selectedTourType;
    description.innerHTML = data.decription
    bprice.innerHTML = data.price
    // slider.innerHTML = `<ul class="slides">
    // 									<li>
    // 										<a href = "${extraImage.image0}"
    // 										class = "swipebox"
    // 										title = "" > <img width = "950"
    // 										height = "200"
    // 										src = ${extraImage.image0}
    // 											 class="attachment-shop_single size-shop_single wp-post-image" alt="" title="" draggable="false"> </a>
    // 									</li>
    // 									<li>
    // 									    <a href = "${extraImage.image1}"
    // 									class = "swipebox"
    // 									title = "" > <img width = "950"
    // 									height = "700"
    // 									src = ${extraImage.image1}
    // 									class = "attachment-shop_single size-shop_single wp-post-image"
    // 									alt = ""
    // 									title = ""
    // 									draggable = "false" > </a> </li>
    // 									<li>
    // 									    <a href = "${extraImage.image2}"
    // 									class = "swipebox"
    // 									title = "" > <img width = "950"
    // 									height = "700"
    // 									src = ${extraImage.image2}
    // 									class = "attachment-shop_single size-shop_single wp-post-image"
    // 									alt = ""
    // 									title = ""
    // 									draggable = "false" > </a> </li>
    // 									<li>
    // 									    <a href = "${extraImage.image3}"
    // 									class = "swipebox"
    // 									title = "" > <img width = "950"
    // 									height = "700"
    // 									src = ${extraImage.image3}
    // 									class = "attachment-shop_single size-shop_single wp-post-image"
    // 									alt = ""
    // 									title = ""
    // 									draggable = "false" > </a> </li>
    // 									<li>
    // 									    <a href = "${extraImage.image4}"
    // 									class = "swipebox"
    // 									title = "" > <img width = "950"
    // 									height = "700"
    // 									src = ${extraImage.image4}
    // 									class = "attachment-shop_single size-shop_single wp-post-image"
    // 									alt = ""
    // 									title = ""
    // 									draggable = "false" > </a> </li>
    // 									<li>
    // 									    <a href = "${extraImage.image5}"
    // 									class = "swipebox"
    // 									title = "" > <img width = "950"
    // 									height = "700"
    // 									src = ${extraImage.image5}
    // 									class = "attachment-shop_single size-shop_single wp-post-image"
    // 									alt = ""
    // 									title = ""
    //                                     draggable = "false" > </a> 
    //                                     </li>
    //                                 </ul>`;
    // carousel.innerHTML = `<li>
    // 										<img width = "150"
    // 										height = "100"
    // 									    src = ${extraImage.image0}
    // 										class = "attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
    // 										 alt="" title="" draggable="false">
    // 									</li>
    // 									<li>
    // 										<img width = "150"
    // 										height = "100"
    // 									    src = ${extraImage.image1}
    // 										class = "attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
    // 										 alt="" title="" draggable="false">
    // 									</li>
    // 									<li>
    // 										<img width = "150"
    // 										height = "100"
    // 									    src = ${extraImage.image2}
    // 										class = "attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
    // 										 alt="" title="" draggable="false">
    // 									</li>
    // 									<li>
    // 										<img width = "150"
    // 										height = "100"
    // 									    src = ${extraImage.image3}
    // 										class = "attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
    // 										 alt="" title="" draggable="false">
    // 									</li>
    // 									<li>
    // 										<img width = "150"
    // 										height = "100"
    // 									    src = ${extraImage.image4}
    // 										class = "attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
    // 										 alt="" title="" draggable="false">
    // 									</li>
    // 									<li>
    // 										<img width = "150"
    // 										height = "100"
    // 									    src = ${extraImage.image5}
    // 										class = "attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
    // 										 alt="" title="" draggable="false">
    // 									</li>`
    // carousel.innerHTML = `<ul class="slides">
    // 									<li>
    // 										<img width = "150"
    // 										height = "100"
    // 									    src = ${extraImage.image0}
    // 										class = "attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
    // 										 alt="" title="" draggable="false">
    // 									</li>
    // 									<li>
    // 										<img width = "150"
    // 										height = "100"
    // 									    src = ${extraImage.image1}
    // 										class = "attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
    // 										 alt="" title="" draggable="false">
    // 									</li>
    // 									<li>
    // 										<img width = "150"
    // 										height = "100"
    // 									    src = ${extraImage.image2}
    // 										class = "attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
    // 										 alt="" title="" draggable="false">
    // 									</li>
    // 									<li>
    // 										<img width = "150"
    // 										height = "100"
    // 									    src = ${extraImage.image3}
    // 										class = "attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
    // 										 alt="" title="" draggable="false">
    // 									</li>
    // 									<li>
    // 										<img width = "150"
    // 										height = "100"
    // 									    src = ${extraImage.image4}
    // 										class = "attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
    // 										 alt="" title="" draggable="false">
    // 									</li>
    // 									<li>
    // 										<img width = "150"
    // 										height = "100"
    // 									    src = ${extraImage.image5}
    // 										class = "attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
    // 										 alt="" title="" draggable="false">
    // 									</li>
    // 								</ul>`;
    // carousel.innerHTML = `<li>
    // 										<img width="150" height="100" src="images/tour/tour-1.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
    // 										 alt="" title="" draggable="false">
    // 									</li>
    // 									<li>
    // 										<img width="150" height="100" src="images/tour/tour-2.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
    // 										 alt="" title="" draggable="false">
    // 									</li>
    // 									<li>
    // 										<img width="150" height="100" src="images/tour/tour-3.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
    // 										 alt="" title="" draggable="false">
    // 									</li>
    // 									<li>
    // 										<img width="150" height="100" src="images/tour/tour-4.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
    // 										 alt="" title="" draggable="false">
    // 									</li>
    // 									<li>
    // 										<img width="150" height="100" src="images/tour/tour-5.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
    // 										 alt="" title="" draggable="false">
    // 									</li>
    // 									<li>
    // 										<img width="150" height="100" src="images/tour/tour-6.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
    // 										 alt="" title="" draggable="false">
    // 									</li>`



}
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
            console.log(d)
            // const date = d.getDate().toString()
            // const year = d.getFullYear().toString()
            // const month = d.getMonth()
            //const date = [(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
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