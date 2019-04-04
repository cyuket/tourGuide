let tours;

const adminLink = document.querySelectorAll('#admin');
const loggedOutLink = document.querySelectorAll('#out');
const loggedInLink = document.querySelectorAll('#in')
//const adminLink = document.querySelectorAll('#admin')
let cy = (data) => {
    alert(data)
}
const setupUi = (user) => {

    if (user) {
          if (user.admin) {
            adminLink.forEach(item => item.style.display = "inline");
          }

        loggedInLink.forEach(item => item.style.display = 'none');
        loggedOutLink.forEach(item => item.style.display = 'inline')
    } else {
        //hide account info

        //toggole ui element 
        // adminLink.forEach(item => item.style.display = "block")
        loggedInLink.forEach(item => item.style.display = 'inline');
        loggedOutLink.forEach(item => item.style.display = 'none')
        //adminLink.forEach(item => item.style.display = "none")
    }
}
const popularTours = document.querySelector("#popularTours");
popularTours.style.display = "inline"
const displayPopular = (data) => {
     let html = ``
if (data.length >= 4) {
    for (let i = 0; i < 4; i++) {
        let id = data[i].id
        const detail = data[i].data();
        let string = numeral(detail.price).format('0,0');
        const div = `<div class="item-tour col-md-3 col-sm-6 product">
                                    <div class="item_border">
                                        <div class="item_content">
                                            <div class="post_images">
                                                <a href="./single-tour.html?${id}" class="travel_tour-LoopProduct-link">
                                                    <span class="price">
                                                           
                                                        <ins><span class="travel_tour-Price-amount amount">₦ ${string}</span></ins>
                                                    </span>
                                                    
                                                    <img src=${detail.featuredImageUrl} alt="" title="" style= "height: 150px; width:300px">
                                                </a>
                                                <div class="group-icon">
                                                    <a href="./single-tour.html?${id}" data-toggle="tooltip" data-placement="top" title=""
                                                        class="frist" data-original-title="River Cruise"><i class="flaticon-transport-2"></i></a>
                                                    <a href="./single-tour.html?${id}" data-toggle="tooltip" data-placement="top" title=""
                                                        data-original-title="Wildlife"><i class="flaticon-island"></i></a>
                                                </div>
                                            </div>
                                            <div class="wrapper_content">
                                                <div class="post_title">
                                                    <h4>
                                                        <a href="./single-tour.html?${id}" rel="bookmark">${detail.tourName}</a>
                                                    </h4>
                                                </div>
                                                <span class="post_date">${detail.days} DAYS</span>
                                               
                                            </div>
                                        </div>
                                        <div class="read_more">
                                            <div class="item_rating">
                                                <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                    class="fa fa-star"></i><i class="fa fa-star"></i>
                                            </div>
                                            <a href="./single-tour.html?${id}" class="read_more_button">VIEW MORE
                                                <i class="fa fa-long-arrow-right"></i></a>
                                            <div class="clear"></div>
                                        </div>
                                    </div>
                                </div>`
        html += div
    }
    let but = `<a href="./tours.html" class="read_more_button" style="margin-right: 20%; font-size:150%;">See All Tour
                                                <i class="fa fa-long-arrow-right"></i></a>`
    html += but
} else {
    data.forEach(data => {
        let id = data.id
        const detail = data.data();
        let string = numeral(detail.price).format('0,0');
        const div = `<div class="item-tour col-md-3 col-sm-6 product">
                                    <div class="item_border">
                                        <div class="item_content">
                                            <div class="post_images">
                                                <a href="./single-tour.html?${id}" class="travel_tour-LoopProduct-link">
                                                    <span class="price">
                                                           
                                                        <ins><span class="travel_tour-Price-amount amount">₦ ${string}</span></ins>
                                                    </span>
                                                    
                                                    <img src=${detail.featuredImageUrl} alt="" title="" style= "height: 150px; width:300px">
                                                </a>
                                                <div class="group-icon">
                                                    <a href="./single-tour.html?${id}" data-toggle="tooltip" data-placement="top" title=""
                                                        class="frist" data-original-title="River Cruise"><i class="flaticon-transport-2"></i></a>
                                                    <a href="./single-tour.html?${id}" data-toggle="tooltip" data-placement="top" title=""
                                                        data-original-title="Wildlife"><i class="flaticon-island"></i></a>
                                                </div>
                                            </div>
                                            <div class="wrapper_content">
                                                <div class="post_title">
                                                    <h4>
                                                        <a href="./single-tour.html?${id}" rel="bookmark">${detail.tourName}</a>
                                                    </h4>
                                                </div>
                                                <span class="post_date">${detail.days} DAYS</span>
                                               
                                            </div>
                                        </div>
                                        <div class="read_more">
                                            <div class="item_rating">
                                                <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                    class="fa fa-star"></i><i class="fa fa-star"></i>
                                            </div>
                                            <a href="./single-tour.html?${id}" class="read_more_button">VIEW MORE
                                                <i class="fa fa-long-arrow-right"></i></a>
                                            <div class="clear"></div>
                                        </div>
                                    </div>
                                </div>`
        html += div
    })
} 
    //console.log(tours)
   

    
    popularTours.innerHTML = html;
    

}

db.collection('tourLocation').onSnapshot(snapshot => {
    //  console.log(snapshot.docs.id);
    let data = snapshot.docs;
    tours = data
    displayPopular(data);
}, err => {
    console.log(err.message)
});


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