/* LINK FUNCTIONS */

const go_to_created_user_notification = () => {
    // window.location.href = "../public/created_user_notification.html";
    window.location.href = "./created_user_notification.html";
}

const go_to_login = () => {
    // window.location.href = "../public/index.html";
    window.location.href = "./index.html";
}


/* SIGN UP */

var url_create_user = `${ip_address}/api/users/create`; 
var data_create_user = {}

const create_user = async () => {

    var username_bar = document.getElementById("username_bar").value
    var fullname_bar = document.getElementById("fullname_bar").value
    var email_bar = document.getElementById("email_bar").value
    var phonenumber_bar = document.getElementById("phonenumber_bar").value
    var address_bar = document.getElementById("address_bar").value
    var password_bar = document.getElementById("password_bar").value


    if (username_bar && fullname_bar && email_bar && phonenumber_bar && address_bar && password_bar !== "") {

        document.getElementById("fields_required_div").style.display = "none"

        data_create_user.username = username_bar
        data_create_user.full_name = fullname_bar
        data_create_user.email = email_bar
        data_create_user.phone_number = phonenumber_bar
        data_create_user.address = address_bar
        data_create_user.password = password_bar
    
        console.log(data_create_user)

        var res = await fetch(url_create_user, {
            method: 'POST',
            body: JSON.stringify(data_create_user),
            headers: {
                'Content-Type': 'application/json'
            }
        })


        var data = await res.json();
        console.log(data)

        if (res.status == "200") {

            console.log("User created successfully")
            go_to_created_user_notification()
        } 
    
        if (data.msg == "Username already exists") {
            document.getElementById("user_already_exists_div").style.display = "block"
            document.getElementById("email_already_exists_div").style.display = "block"
        }

        if (data.msg == "Email already exists") {
            document.getElementById("email_already_exists_div").style.display = "block"
            document.getElementById("user_already_exists_div").style.display = "none"
        }


    } else {
        document.getElementById("fields_required_div").style.display = "block"
    }

}