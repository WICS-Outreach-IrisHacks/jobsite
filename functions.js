function search_results() {
    var div = document.getElementById("search");
    var location = document.getElementById("search_input").value;
    div.remove();
    document.getElementById('jobs-in').innerHTML = "Jobs located in " + location;

    var map = L.map('map').setView([33.6424, -117.8417], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
    fetch('https://data.usajobs.gov/api/codelist/agencysubelements').then(resp => resp.json()).then(jobListingData => {
        console.log(jobListingData);


        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        jobListingData['CodeList'][0]['ValidValue'].forEach(job => {

            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
            document.getElementById('display').innerHTML  += `
            <div>
                <p><strong>${job['Acronym']}</strong></p>
                <p>${job['Value']}</p>
            </div>
            `;

        });
        // document.get
    })
}

const nameInput = document.getElementById("search_input");

nameInput.addEventListener("focus", function() {
  if (this.placeholder == "Zipcode, City, State...") {
    this.placeholder = "";
  }
});

nameInput.addEventListener("blur", function() {
  if (this.placeholder == "") {
    this.placeholder = "Zipcode, City, State...";
  }
});