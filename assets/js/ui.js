let tours;
var tag = document.createElement('script');

const loggedOutLink = document.querySelectorAll('#out');
const loggedInLink = document.querySelectorAll('#in')
//const adminLink = document.querySelectorAll('#admin')
const cy = (data) => {
    alert(data)
}
const setupUi = (user) => {

    if (user) {
        //   if (user.admin) {
        //     adminLink.forEach(item => item.style.display = "block");
        //   }

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
const displayPopular = () => {
    tag.setAttribute("src", "assets/js/owl.carousel.min.js");
    document.getElementsByTagName("body")[0].appendChild(tag);
    //console.log(tours)
    let html = ``
    // for (let i = 0; i < 5; i++) {
    //   const div = `<h1> cy </h1>`
    //   html += div
    // }
    for (let i = 0; i < 7; i++) {
        //let id = data[i].id
        //const detail = data[i].data();
        const div = `<div class="item-tour">
                                    <div class="item_border">
                                        <div class="item_content">
                                            <div class="post_images">
                                                <a href="./single-tour.html?" class="travel_tour-LoopProduct-link">
                                                    <span class="price"><del>
                                                            <span class="travel_tour-Price-amount amount">$ $ </span></del>
                                                        <ins><span class="travel_tour-Price-amount amount">$ $.00</span></ins>
                                                    </span>
                                                    <span class="onsale">Sale!</span>
                                                    <img src="images/tour/430x305/tour-1.jpg" alt="" title="">
                                                </a>
                                                <div class="group-icon">
                                                    <a href="./single-tour.html?" data-toggle="tooltip" data-placement="top" title=""
                                                        class="frist" data-original-title="River Cruise"><i class="flaticon-transport-2"></i></a>
                                                    <a href="./single-tour.html?" data-toggle="tooltip" data-placement="top" title=""
                                                        data-original-title="Wildlife"><i class="flaticon-island"></i></a>
                                                </div>
                                            </div>
                                            <div class="wrapper_content">
                                                <div class="post_title">
                                                    <h4>
                                                        <a href="./single-tour.html?$" rel="bookmark">Kiwiana Panorama</a>
                                                    </h4>
                                                </div>
                                                <span class="post_date">5 DAYS 4 NIGHTS</span>
                                                <p>Aliquam lacus nisl, viverra convallis sit amet&nbsp;penatibus
                                                    nunc&nbsp;luctus</p>
                                            </div>
                                        </div>
                                        <div class="read_more">
                                            <div class="item_rating">
                                                <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                    class="fa fa-star"></i><i class="fa fa-star"></i>
                                            </div>
                                            <a href="./single-tour.html?$" class="read_more_button">VIEW MORE
                                                <i class="fa fa-long-arrow-right"></i></a>
                                            <div class="clear"></div>
                                        </div>
                                    </div>
                                </div>`
        html += div
    }
    popularTours.innerHTML = html;

}
//displayPopular()
db.collection('tourLocation').onSnapshot(snapshot => {
    //  console.log(snapshot.docs.id);
    let data = snapshot.docs;
    tours = data
    //displayPopular(data);
}, err => {
    console.log(err.message)
    });
const tourBookingForm = document.querySelector("#tourBookingForm");
tourBookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const tourName = tourBookingForm['name_tour'].value
    const stourType = tourType.options[tourType.selectedIndex].text;
    const sdestination = destination.options[destination.selectedIndex].text;
    window.location.href = `./searchTour.html?${tourName}`;
})