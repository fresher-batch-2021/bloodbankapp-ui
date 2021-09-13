
function register() {
    event.preventDefault();
   
    const userName=document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const userPassword = document.querySelector("#Password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;

    try {

        Validator.isValidEmail(email, "Email Cannot be Blank");
    
        Validator.isValidPassword(userPassword, "Password must contain atleast 8 Characters");
        Validator.isValidPassword(confirmPassword, "Password must contain atleast 8 Characters");

        let registerObj={
            reguserName: userName,
            regemail: email
        }
        console.log(registerObj);
                
        let formData = {
            email: email,
            password: userPassword,
            role: "USER"
        };
        console.log(formData);

        isEmailExists(email).then(res => {
            let data = res.data.docs[0];
            console.log(res);
            if (data != null) {

                toastr.error("This email Id is already exists");
                setTimeout(function () {

                }, 1000)
            } else {

                UserService.register(formData).then(res => {
                    let data = res.data;
                    console.log(data);

                    toastr.success("Successfully Register");
                    setTimeout(function () {
                        window.location.href = "Login.html";
                    }, 3000);
                    localStorage.setItem('registerData', JSON.stringify(res.data));

                }).catch(err => {
                    toastr.error(err.message);
                    toastr.error("Unable to register");
                });

            }
        }

        );
    }
    catch (err) {
        console.error(err.message);
        toastr.error(err.message);
        toastr.error("Failed");
    };
}

