function bloodrequest() {

    event.preventDefault();

    var requestname = document.getElementById("name").value;
    var requestblood = document.getElementById("bloodgroup").value;

    let data = {
        "name": requestname,
        "blood": requestblood
    }

    console.log(data);

    if (requestname == "" || requestname == null) {

        alert("Enter Your Name");

        return false;

    }

    if (requestblood == "" || requestblood == null) {

        alert("Enter Your Blood Group");

        return false;

    }

    else {

        console.log(data);

        let url = "https://97233c10-e8bd-4684-98ca-20e5eaf8dd35-bluemix.cloudant.com/bloodbank-bloodrequest/";

        const dbusername = "apikey-v2-msz5pn0gamsoigpftay3cndoju75rdeejvo1cd3paw0";
        const dbpassword = "1cd6b51776516316358ce28da3097318";

        const basicAuth = 'Basic ' + btoa(dbusername + ":" + dbpassword);

        let formData = {
            name: requestname,
            bloodtype: requestblood
        };

        axios.post(url, formData, { headers: { 'Authorization': basicAuth } }).then(res => {

            let data = res.data;

            console.log(data);

            alert("Successfull");

            window.location.href = "bloodneed.html"

        });

    }

}