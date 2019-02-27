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
                 zoom: 8,
                 center: latlng
             }
                map = new google.maps.Map(mapDisplay,mapOptions);
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