function donateblood(){

    event.preventDefault();

    const donatebloodname = document.getElementById("name").value;
    const donatebloodgroup = document.getElementById("bloodgroup").value;
    const donatephonenumber = document.getElementById("phoneNumber").value;
    const donatecity = document.getElementById("city").value;


    let datas = {
        "name" : donatebloodname,
        "bloodgroup" : donatebloodgroup
    }

    console.log(datas);

    if(donatebloodname == "" || donatebloodname == null){

        alert("Enter Your Name");

        return false;

    }

    if(donatebloodgroup == "" || donatebloodgroup == null){

        alert("Enter Your Blood Group");

        return false;

    }

    if(donatephonenumber == "" || donatephonenumber == null){

        alert("Enter Your Phone Number");

        return false;

    }

    if(donatecity == "" || donatecity == null){

        alert("Enter Your City");

        return false;

    }

    else{

        console.log(datas);

        let url = "https://97233c10-e8bd-4684-98ca-20e5eaf8dd35-bluemix.cloudant.com/bloodbank-blooddonate/";

        const dbusername = "apikey-v2-msz5pn0gamsoigpftay3cndoju75rdeejvo1cd3paw0";
        const dbpassword = "1cd6b51776516316358ce28da3097318";

        const basicAuth = 'Basic ' + btoa(dbusername + ":" + dbpassword);

        let formData = {
            name: donatebloodname,
            bloodtype: donatebloodgroup,
            phonenumber : donatephonenumber,
            city : donatecity
        };

        axios.post(url, formData, { headers: { 'Authorization': basicAuth } }).then(res => {

            let data = res.data;

            console.log(data);

            alert(" Donated Successfull");

            window.location.href = "available.html";

            // console.log(formData);

        });

    }

}