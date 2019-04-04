 db.collection('tourLocation').onSnapshot(snapshot => {
     //  console.log(snapshot.docs.id);
     let data = snapshot.docs;
     setupTour(data);
 }, err => {
     console.log(err.message)
 });
 const tour = document.querySelector("#content")
 const setupTour = (data) => {
     if (data.length) {
         //console.log(data)
         let html = "";
         data.forEach(docs => {
             let id = docs.id
             //console.log(id)
             const detail = docs.data();
             // console.log(detail)
             let description = ""
             let newDescription

             const li = `<li class="item-tour col-md-4 col-sm-6 product">
								<a href="./single-tour.html?${id}"><div class="item_border item-product">
									<div class="post_images">
									
											<span class="price">₦ ${detail.price}</span>
											<img src=${detail.featuredImageUrl} alt="Discover Brazil" style= "height: 150px; width:300px" title="Discover Brazil">
									
										
									</div>
									<div class="wrapper_content">
										<div class="post_title"><h4>
											${detail.tourName}
										</h4></div>
										<span class="post_date">${detail.days} DAYS </span>
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
                    <a rel = "nofollow"
                    href = "./single-tour.html?${id}"
                     class="button product_type_tour_phys add_to_cart_button" 
                     >Read more</a>
									</div>
								</div></a>
              </li>`;
             // let des = document.querySelector(".description");
             // des.innerHTML = detail.description
             html += li;
         });

         tour.innerHTML = html
     } else {
         tour.innerHTML = '<h5 class="center-align"> No Tour Added</h5'
     }

 }

 const tourBookingForm = document.querySelector("#tourBookingForm");
 tourBookingForm.addEventListener("submit", (e) => {
     e.preventDefault();
     const tourName = tourBookingForm['name_tour'].value
     const sTourType = tourType.options[tourType.selectedIndex].text;
     const sdestination = destination.options[destination.selectedIndex].text;
     let tourTypeSession = sessionStorage.setItem("tourType", sTourType);
     let tourNameSession = sessionStorage.setItem("tourName", tourName);
     let destinationSession = sessionStorage.setItem("tourDestination", sdestination);
     window.location.href = `./searchTour.html`;
 })