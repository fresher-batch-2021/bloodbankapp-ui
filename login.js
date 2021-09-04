//Login Verification

function check() {

    var emailID = localStorage.getItem('registeremail');
    
    var password = localStorage.getItem('registerpassword');
    

    var loginemail = document.getElementById('email').value;

    var loginpassword = document.getElementById('pswd').value;

    if (loginemail != emailID || loginpassword != password) {

        alert('Invalid Details');

    }

    else {

        alert("Successfully Logged In");

        window.location.href="bloodinfo.html";

    }

}