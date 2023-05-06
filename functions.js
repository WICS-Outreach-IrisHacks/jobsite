function search_results() {
    alert("Under Construction!!");
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
    fetch('https://data.usajobs.gov/api/codelist/agencysubelements').then(resp => resp.json()).then(jobListingData => {
        console.log(jobListingData);


        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        jobListingData['CodeList'][0]['ValidValue'].forEach(job => {

            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
            document.getElementById('display').innerHTML  += `
            <div>
                <p>${job['Value']}</p>
                <p>${job['Acronym']}</p>
            </div>
            `;

        });
        // document.get
    })
}