function donate(){

    event.preventDefault();   

    var donatename = document.getElementById("name").value;
    var donateblood = document.getElementById("bloodgroup").value;

    let data = {
        "name" : donatename,
        "blood" : donateblood
    }

    console.log(data);

    if(donatename == "" || donatename == null){

        alert("Enter Your Name");

        return false;

    }

    if(donateblood == "" || donateblood == null){

        alert("Enter Your Blood Group");

        return false;

    }

    else{

        window.location.href="available.html";

    }

}