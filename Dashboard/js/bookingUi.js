let docId
const tableBody = document.querySelector("#tableBody")
const setupTable = (doc) => {
    let tr = document.createElement("tr");

    let name = document.createElement("td");
    let email = document.createElement("td");
    let tourName = document.createElement("td");
    let ticketId = document.createElement("td");
    let dateBooked = document.createElement("td");
    let actions = document.createElement("td")
    let status = document.createElement("td");
    let buttonDiv = document.createElement("div")
    let declineeButton = document.createElement("button");
    let checkoutButton = document.createElement("button");
    let confirmButton = document.createElement("button");
    if (doc.data().status == "Pending") {
        status.style.color = "#ffb300"
        buttonDiv.setAttribute("class", "btn-group")
        // console.log(doc.id)
        confirmButton.setAttribute("data-id", doc.id);
        declineeButton.setAttribute("data-id", doc.id);

        confirmButton.setAttribute("class", "btn btn-primary");
        declineeButton.setAttribute("class", "btn btn-danger");
        confirmButton.textContent = "Confirm"
        declineeButton.textContent = "Decline"
        buttonDiv.appendChild(confirmButton)
        buttonDiv.appendChild(declineeButton);
    }
    if (doc.data().status == "Confirmed") {
        status.style.color = "green"
        buttonDiv.setAttribute("class", "btn-group")
        // console.log(doc.id)
        checkoutButton.setAttribute("data-id", doc.id);


        checkoutButton.setAttribute("class", "btn btn-primary");

        checkoutButton.textContent = "Check Out"

        buttonDiv.appendChild(checkoutButton)

    }
    if (doc.data().status == "Declined") {
        status.style.color = "red"
    }

    name.textContent = `${doc.data().first_name} ${doc.data().last_name}`;
    email.textContent = doc.data().paystackEmail;
    dateBooked.textContent = doc.data().date_book;
    tourName.textContent = doc.data().tourName;
    ticketId.textContent = doc.data().ticketId;
    let fullName = `${doc.data().first_name} ${doc.data().last_name}`
    let ticket = doc.data().ticketId;
    let sendEmail = doc.data().paystackEmail;
    let tourDate = doc.data().date_book;
    let nameTour = doc.data().tourName;
    actions.appendChild(buttonDiv);
    status.textContent = doc.data().status;
    tr.appendChild(name)
    tr.appendChild(email)
    tr.appendChild(tourName)
    tr.appendChild(dateBooked)
    tr.appendChild(ticketId)
    tr.appendChild(status)
    tr.appendChild(actions)
    tableBody.appendChild(tr)

    confirmButton.addEventListener("click", e => {
        e.stopPropagation();
        let id = e.target.getAttribute("data-id");
        console.log(id)
       
        // find a doc on the dom
        db.collection("bookings").doc(id).update({
            status: "Confirmed"
        }).then(() => {
            const confirmEmail = functions.httpsCalllable("confimEmail");
            confirmEmail({
                name: fullName,
                ticket,
                email: sendEmail,
                date: tourDate,
                tourName: nameTour
            })
        })

    });
    declineeButton.addEventListener("click", e => {
        // e.stopPropagation();
        let id = e.target.getAttribute("data-id");
        // console.log(id)
        //find a doc on the dom
        db.collection("bookings").doc(id).update({
            status: "Declined"
        }).then(() => {
            const declineEmail = functions.httpsCalllable("declineEmail");
            declineEmail({
                name: fullName,
                email: sendEmail,
                date: tourDate,
                tourName: nameTour
            })
        })

    });
    checkoutButton.addEventListener("click", e => {
        // e.stopPropagation();
        let id = e.target.getAttribute("data-id");
        // console.log(id)
        //find a doc on the dom
        db.collection("bookings").doc(id).update({
            status: "Checkedout"
        }).then(() => {
            const declineEmail = functions.httpsCalllable("declineEmail");
            declineEmail({
                name: fullName,
                email: sendEmail,
                date: tourDate,
                tourName: nameTour
            })
        })

    });

}