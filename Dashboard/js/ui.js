const tableBody = document.querySelector("#tableBody")
const setupTable = (doc) => {
    let tr = document.createElement("tr");
    let plus = document.createElement("i");
    let close = document.createElement("i");
    let name = document.createElement("td");
    let days = document.createElement("td");
    let tourType = document.createElement("td");
    let price = document.createElement("td");
    let destination = document.createElement("td");
    let buttons = document.createElement("td");
    let buttonDiv = document.createElement("div")
    let deleteButton = document.createElement("a");
    let updateButton = document.createElement("a");
    plus.setAttribute("class", "icon_plus_alt2")
    close.setAttribute("class", "icon_close_alt2")
    buttonDiv.setAttribute("class", "btn-group")
    deleteButton.setAttribute("data-id", doc.id);
    updateButton.setAttribute("class", "btn btn-primary");
    deleteButton.setAttribute("class", "btn btn-danger");
    updateButton.setAttribute("data-id", doc.id);

    name.textContent = doc.data().tourName;
    days.textContent = doc.data().days;
    destination.textContent = doc.data().selectedState;
    tourType.textContent = doc.data().selectedTourTpe;
    var string = numeral(doc.data().price).format('0,0');
    price.textContent = string;
    updateButton.appendChild(plus)
    deleteButton.appendChild(close)
    buttonDiv.appendChild(updateButton)
    buttonDiv.appendChild(deleteButton);
    buttons.appendChild(buttonDiv);
    tr.appendChild(name)
    tr.appendChild(days)
    tr.appendChild(tourType)
    tr.appendChild(destination)
    tr.appendChild(price)
    tr.appendChild(buttons)
    tableBody.appendChild(tr)

    deleteButton.addEventListener("click", e => {
        // e.stopPropagation();
        let id = e.target.parentElement.getAttribute("data-id");
        console.log(id)
        //find a doc on the dom
        db.collection("tourLocation")
            .doc(id)
            .delete();
    });

    // if (data.length) {
    //     let html = "";
    //     data.forEach(docs => {
    //         let id = docs.id
    //         const detail = docs.data();

    //         const td = `<tr >
    //                         <td>${detail.tourName}</td>
    //                         <td>${detail.days}</td>
    //                         <td>${detail.selectedTourType}</td>
    //                         <td>${detail.selectedState}</td>
    //                         <td>${detail.price}</td>
    //                         <td>
    //                             <div class="btn-group" data-id = ${id}>
    //                                 <a class="btn btn-primary" href="${id}"><i class="icon_plus_alt2"></i></a>
    //                                 <a class="btn btn-danger" href="#" ><i class="icon_close_alt2"></i></a>
    //                             </div>
    //                         </td>
    //                     </tr>`;
    //         html += td;
    //         tableBody.innerHTML = html

    //         // let deleteButton = document.querySelector("#delete")
    //         // deleteButton.addEventListener("click", (e) => {
    //         //     // e.stopPropagation();
    //         //     // let deleteId = id;
    //         //     // console.log(deleteId)
    //         //     console.log(e)
    //         // })
    //     });

    //     function cy(id) {
    //         console.log(id)
    //     }



    // } else {
    //     tableBody.innerHTML = '<h5 class="center-align"> No Location added</h5'
    // }

}