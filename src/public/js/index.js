/* LINK FUNCTIONS */

const go_to_get_all_products = () => {
    window.location.href = "../public/get_all_products.html";
}

const go_to_sign_up = () => {
    window.location.href = "../public/sign_up.html";
}

const go_to_panel_admin = () => {
    window.location.href = "../public/panel_admin.html";
}

/* USER LOGIN */

var url_login_user = `${ip_address}/api/users/login`
var data_login = {}

const user_login = async () => {

    var username_bar_login = document.getElementById("username_bar_login").value
    var password_bar_login = document.getElementById("password_bar_login").value

    if (username_bar_login && password_bar_login !== " ") {

        document.getElementById("fields_required_div").style.display = "none"
    
        data_login.user = username_bar_login
        data_login.password = password_bar_login

        console.log(data_login)

        console.log(data_login)


        var res = await fetch(url_login_user, {
            method: 'POST',
            body: JSON.stringify(data_login),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log(res)
        console.log(res.statusText)

        var data = await res.json();
        console.log(data)

        if (res.status == "200") {

            sessionStorage.setItem('Token', data.token)
            console.log(JSON.stringify(data.user))
            sessionStorage.setItem('user', JSON.stringify(data.user))

            if (data.user.role == 1) {
                go_to_get_all_products()
            } else {
                go_to_panel_admin()
            }

        } 

        if (data.msg == "Wrong user") {
            document.getElementById("wrong_user_div").style.display = "block"
        }

        if (data.msg == "Wrong password") {
            document.getElementById("wrong_password_div").style.display = "block"
            document.getElementById("wrong_user_div").style.display = "none"
        }

    } else {
    
        document.getElementById("fields_required_div").style.display = "block"
    
    }

}
        
       