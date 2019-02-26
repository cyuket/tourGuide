const tableBody = document.querySelector("#tableBody")
const setupTable = (data) => {
    if (data.length) {
        //console.log(data)
        let html = "";
        data.forEach(docs => {
            const detail = docs.data();
            //console.log(detail)
            const td = `<tr>
                            <td>${detail.tourName}</td>
                            <td>${detail.days}</td>
                            <td>${detail.selectedTourType}</td>
                            <td>${detail.selectedState}</td>
                            <td>${detail.price}</td>
                            <td>
                                <div class="btn-group">
                                    <a class="btn btn-primary" href="#"><i class="icon_plus_alt2"></i></a>
                                    <a class="btn btn-success" href="#"><i class="icon_check_alt2"></i></a>
                                    <a class="btn btn-danger" href="#"><i class="icon_close_alt2"></i></a>
                                </div>
                            </td>
                        </tr>`;
            html += td;
        });
        tableBody.innerHTML = html
    } else {
        tableBody.innerHTML = '<h5 class="center-align"> No Location added</h5'
    }

}