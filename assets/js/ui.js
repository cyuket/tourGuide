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
									
											<span class="price">$ ${detail.price}</span>
											<img width="430" height="305" src=${detail.featuredImageUrl} alt="Discover Brazil" title="Discover Brazil">
									
										<div class="group-icon">
											<span href="tours.html" data-toggle="tooltip" data-placement="top" title="" class="frist" data-original-title="Escorted Tour"><i class="flaticon-airplane-4"></i></span>
											<span href="tours.html" data-toggle="tooltip" data-placement="top" title="" data-original-title="Rail Tour"><i class="flaticon-cart-1"></i></span>
										</div>
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