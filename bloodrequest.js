function bloodrequest(){

    event.preventDefault();   

    var requestname = document.getElementById("name").value;
    var requestblood = document.getElementById("bloodgroup").value; 

    let data  = {
        "name" : requestname,
        "blood" : requestblood
    }

    console.log(data);

    if(requestname == "" || requestname == null){

        alert("Enter Your Name");

        return false;

    }

    if(requestblood == "" || requestblood == null){

        alert("Enter Your Blood Group");

        return false;

    }

    else{

    window.location.href = "bloodneed.html"

    }

}