/* MATERIALIZE INIT */

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });  

/* LINK FUNCTIONS */

const go_to_panel_admin = () => {
    // window.location.href = "../public/panel_admin.html";
    window.location.href = "./panel_admin.html";
    document.getElementById("pedidos_btn").style.backgroundColor = "transparent"
}

const go_to_crud = () => {
    // window.location.href = "../public/crud.html";
    window.location.href = "./crud.html";
}

const go_to_login = () => {
    // window.location.href = "../public/index.html";
    window.location.href = "./index.html";
}

/* GET CURRENT DATE FOR HEADER */

const get_date = () => {

    // Create a new date
    var current_date = new Date();

    // Date day
    var date_day = current_date.getDate()

    // Name of the day
    var weekday = new Array(7);

    weekday[0] = "Domingo";
    weekday[1] = "Lunes";
    weekday[2] = "Martes";
    weekday[3] = "Miércoles";
    weekday[4] = "Jueves";
    weekday[5] = "Viernes";
    weekday[6] = "Sábado";

    // Note: "getDay" returns day of the week in numbers from 0 to 6
    var day_name = weekday[current_date.getDay()];

    // Month
    var month = new Array(12);

    month[0] = "enero";
    month[1] = "febrero";
    month[2] = "marzo";
    month[3] = "abril";
    month[4] = "mayo";
    month[5] = "junio";
    month[6] = "julio";
    month[7] = "agosto"
    month[8] = "septiembre"
    month[9] = "octubre"
    month[10] = "noviembre"
    month[11] = "diciembre"

    // Note: "getMonth" returns month of the year in numbers from 0 to 11
    var month = month[current_date.getMonth()];

    // Complete date to print
    document.getElementById("date_container").innerHTML = day_name + " " + date_day + " de " + month;

}

/* PRINT USER IN LIST */

const print_user_in_list = () => {

    users_array.forEach(function (user) {

        // CREATE EVERY USER AS A ROW
        var user_tr = document.createElement("TR")
        var users_table = document.getElementById("users_table")
        users_table.appendChild(user_tr)

       
        // USER ID TABLE DATA
        var user_id = user.id
        var user_id_td = document.createElement("TD")
        user_tr.appendChild(user_id_td)
        user_id_td.innerHTML = user_id
        user_id_td.setAttribute('class', 'td')

        // USER USERNAME TABLE DATA
        var user_username = user.username
        var user_username_td = document.createElement("TD")
        user_tr.appendChild(user_username_td)
        user_username_td.innerHTML = user_username
        user_username_td.setAttribute('class', 'td')

        // USER FULLNAME TABLE DATA
        var user_fullname = user.full_name
        var user_fullname_td = document.createElement("TD")
        user_tr.appendChild(user_fullname_td)
        user_fullname_td.innerHTML = user_fullname
        user_fullname_td.setAttribute('class', 'td')

        // USER EMAIL TABLE DATA
        var user_email = user.email
        var user_email_td = document.createElement("TD")
        user_tr.appendChild(user_email_td)
        user_email_td.innerHTML = user_email
        user_email_td.setAttribute('class', 'td')


        // USER PHONE NUMBER TABLE DATA
        var user_phone_number = user.phone_number
        var user_phone_number_td = document.createElement("TD")
        user_tr.appendChild(user_phone_number_td)
        user_phone_number_td.innerHTML = user_phone_number
        user_phone_number_td.setAttribute('class', 'td')

        // USER ADDRESS TABLE DATA 
        var user_address = user.address
        var user_address_td = document.createElement("TD")
        user_address_td.innerHTML = user_address
        user_address_td.setAttribute('class', 'td')
        user_tr.appendChild(user_address_td)

        // USER ADDRESS TABLE DATA 
        var user_role = user.cod_role
        var user_role_td = document.createElement("TD")
        user_role_td.innerHTML = user_role
        user_role_td.setAttribute('class', 'td')
        user_tr.appendChild(user_role_td)

    })

}


/* LOAD LIST OF USERS */

var users_array

const load_list_of_users = () => {

    var url_get_all_users = `${ip_address}/api/users/get_all`;
    var token = sessionStorage.getItem('Token')

    //var header = new Headers();
    var users_get_all = {
        method: 'GET',
        headers: {
            Authorization: "Bearer " + token
        },
        cache: 'default'
    };

    fetch(url_get_all_users,
        users_get_all)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //console.log(data)
            users_array = data.users_array
            console.log(users_array)
            print_user_in_list()
            return data
        })
        .catch(function (error) {
            console.log('Error al ejecutar Fetch ' + error);
            return error
        })
}

