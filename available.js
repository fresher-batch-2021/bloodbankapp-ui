function availableblood() {

    let url = "https://97233c10-e8bd-4684-98ca-20e5eaf8dd35-bluemix.cloudant.com/bloodbank-blooddonate/_all_docs?include_docs=true";

    const dbusername = "apikey-v2-msz5pn0gamsoigpftay3cndoju75rdeejvo1cd3paw0";
    const dbpassword = "1cd6b51776516316358ce28da3097318";

    const basicAuth = 'Basic ' + btoa(dbusername + ":" + dbpassword);

    axios.get(url, { headers: { 'Authorization': basicAuth } }).then(res => {

        let data = res.data.rows;

        const users = data.map(obj => obj.doc);

        let content = "";

        for (let task of users) {

            // Cards Items

            content +=
                `
        <div class="card">

            <img src="assets/image/donors-photo.jpg" alt="Avatar">

            <div class="Blood-details">

                <h4 >${task.name}</h4>
                <h5>Blood Group : ${task.bloodtype}</h5>  
                <h5>Phone : ${task.phonenumber}</h5>
                <button>View</button>

            </div>

        </div>`;

        }

        document.querySelector('.database_data').innerHTML = content;

    })

}

// Calling the function

availableblood()