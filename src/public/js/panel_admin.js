/* MATERIALIZE INIT */

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems);
});

/* LINK FUNCTIONS */

const go_to_crud = () => {
  window.location.href = "../public/crud.html";
};

const go_to_get_all_users = () => {
  window.location.href = "../public/get_all_users.html";
};

const go_to_panel_admin = () => {
  window.location.href = "../public/panel_admin.html";
};

const go_to_login = () => {
  window.location.href = "../public/index.html";
};

/* GET CURRENT DATE FOR HEADER */

const get_date = () => {
  // Create a new date
  var current_date = new Date();

  // Date day
  var date_day = current_date.getDate();

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
  month[7] = "agosto";
  month[8] = "septiembre";
  month[9] = "octubre";
  month[10] = "noviembre";
  month[11] = "diciembre";

  // Note: "getMonth" returns month of the year in numbers from 0 to 11
  var month = month[current_date.getMonth()];

  // Complete date to print
  document.getElementById("date_container").innerHTML =
    day_name + " " + date_day + " de " + month;
};

/* CHANGE ORDER STATUS */

var colores = [
  { valor: "nuevo", color: "red", id: 1 },
  { valor: "confirmado", color: "orange", id: 2 },
  { valor: "preparando", color: "#FFC900", id: 3 },
  { valor: "enviando", color: "#34EFA8", id: 4 },
  { valor: "cancelado", color: "#BEC3F0", id: 5 },
  { valor: "entregado", color: "#888DBF", id: 6 },
];

async function change_order_status(select) {
  select.style.backgroundColor = colores.filter(
    (color) => color.valor === select.value
  )[0].color;

  var url_change_order_status = `${ip_address}/api/orders/update_status`;

  var token = sessionStorage.getItem("Token");
  console.log(token);
  var id_string = event.target.id;
  var order_id = id_string.slice(6, 9);
  var new_order_status = colores.filter(
    (color) => color.valor === select.value
  )[0].id;

  var my_header = new Headers();
  my_header.append("Authorization", "Bearer " + token);
  my_header.append("Content-Type", "application/json");

  data_change_order_status = {
    id: order_id,
    id_status: new_order_status,
  };

  console.log(data_change_order_status);

  var res = await fetch(url_change_order_status, {
    method: "PUT",
    headers: my_header,
    body: JSON.stringify(data_change_order_status),
    redirect: "follow",
  });

  var data = await res.json();
  console.log(data);
}

/* DELETE ORDER */

async function delete_order(event) {
  event.preventDefault();

  var id_string = event.target.id;
  var order_id = id_string.slice(10, 13);

  console.log(id_string);
  console.log(order_id);

  var url_delete_order = `${ip_address}/api/orders/delete?id=${order_id}`
  // "http://" + ip_address + ":" + port + "/orders/delete?id=" + order_id;

  var token = sessionStorage.getItem("Token");
  console.log(token);

  var my_header = new Headers();
  my_header.append("Authorization", "Bearer " + token);
  my_header.append("Content-Type", "application/json");

  data_delete_order = { id: order_id };

  var res = await fetch(url_delete_order, {
    method: "DELETE",
    headers: my_header,
    redirect: "follow",
  });

  var data = await res.json();
  console.log(data);

  if ((data.msg = "Order deleted succesfully")) {
    go_to_panel_admin();
  }
}

/* PRINT ORDER IN PANEL */

const print_order_in_panel = () => {
  /*table_container.innerHTML=("<table class='striped'><thead>      <tr>  <th>Name</th>          <th>Item Name</th> <th>Item Price</th> </tr> </thead><tbody id='tbody'><tr><td>Alvin</td>   <td>Eclair</td>   <td>$0.87</td> </tr>  <tr>   <td>Alan</td>   <td>Jellybean</td>   <td>$3.76</td> </tr>  <tr>   <td>Jonathan</td>    <td>Lollipop</td>    <td>$7.00</td>   </tr> </tbody> </table>")
    var tb=document.getElementById('tbody')*/ // <------------- ALTERNATIVA

  orders_array.forEach(function (order) {

    // CREATE EVERY ORDER AS A ROW
    var order_tr = document.createElement("TR");
    var panel_admin_table = document.getElementById("panel_admin_table");
    panel_admin_table.appendChild(order_tr);

    // ORDER STATUS TABLE DATA
    var order_status_td = document.createElement("TD");
    var order_status_select = document.createElement("SELECT");
    order_status_select.setAttribute("class", "browser-default");
    order_status_select.setAttribute("id", "select" + order.id);
    order_status_select.addEventListener("change", function (event) {
      change_order_status(event.target);
    });
   

    // Create select option 1
    var order_status_option_nuevo = document.createElement("OPTION");
    order_status_option_nuevo.innerHTML = "NUEVO";
    order_status_option_nuevo.setAttribute("value", "nuevo");
    order_status_option_nuevo.setAttribute("id", "1");
    order_status_option_nuevo.style.backgroundColor = "red";

    // Create select option 2
    var order_status_option_confirmado = document.createElement("OPTION");
    order_status_option_confirmado.innerHTML = "CONFIRMADO";
    order_status_option_confirmado.setAttribute("value", "confirmado");
    order_status_option_nuevo.setAttribute("id", "2");
    order_status_option_confirmado.style.backgroundColor = "orange";

    // Create select option 3
    var order_status_option_preparando = document.createElement("OPTION");
    order_status_option_preparando.innerHTML = "PREPARANDO";
    order_status_option_preparando.setAttribute("value", "preparando");
    order_status_option_nuevo.setAttribute("id", "3");
    order_status_option_preparando.style.backgroundColor = "#FFC900";
    // Create select option 4
    var order_status_option_enviando = document.createElement("OPTION");
    order_status_option_enviando.innerHTML = "ENVIANDO";
    order_status_option_enviando.setAttribute("value", "enviando");
    order_status_option_nuevo.setAttribute("id", "4");
    order_status_option_enviando.style.backgroundColor = "#34EFA8";

    // Create select option 5
    var order_status_option_cancelado = document.createElement("OPTION");
    order_status_option_cancelado.innerHTML = "CANCELADO";
    order_status_option_cancelado.setAttribute("value", "cancelado");
    order_status_option_nuevo.setAttribute("id", "5");
    order_status_option_cancelado.style.backgroundColor = "#E033FF";

    // Create select option 6
    var order_status_option_entregado = document.createElement("OPTION");
    order_status_option_entregado.innerHTML = "ENTREGADO";
    order_status_option_entregado.setAttribute("value", "entregado");
    order_status_option_nuevo.setAttribute("id", "6");
    order_status_option_entregado.style.backgroundColor = "#888DBF";

    // Create select option 7
    try {
      if (order.status === "nuevo") {
        order_status_option_nuevo.setAttribute("selected", "");
      } else if (order.status === "confirmado") {
        order_status_option_confirmado.setAttribute("selected", "");
      } else if (order.status === "preparando") {
        order_status_option_preparando.setAttribute("selected", "");
      } else if (order.status === "enviando") {
        order_status_option_enviando.setAttribute("selected", "");
      } else if (order.status === "cancelado") {
        order_status_option_cancelado.setAttribute("selected", "");
      } else if (order.status === "entregado") {
        order_status_option_entregado.setAttribute("selected", "");
      }
    } catch (e) {
      console.log(e);
    } finally {
        order_status_select.style.backgroundColor = colores.filter(
            (color) => color.valor === order.status
          )[0].color;

        console.log("COLORESSSSSSSSSSSSSSSSSSS")
        console.log(order.status)

        // console.log(colores.filter(
        //       (color) => color.valor === order.status
        //     )[0].color)

        
    }

    order_status_select.appendChild(order_status_option_nuevo);
    order_status_select.appendChild(order_status_option_confirmado);
    order_status_select.appendChild(order_status_option_preparando);
    order_status_select.appendChild(order_status_option_enviando);
    order_status_select.appendChild(order_status_option_cancelado);
    order_status_select.appendChild(order_status_option_entregado);

    order_status_td.appendChild(order_status_select);

    // MANERA DE RECORTAR EL CÓDIGO DE CREACIÓN DE ELEMENTOS "INYECTANDO" HTML <------------------------
    /*order_status_td.innerHTML = (
            ' <select class="browser-default" id="select' + order.id + '" onchange="change_order_status(this) ">'
            + '<option value="nuevo" style="background-color: red;">NUEVO</option>'
            + '<option value="confirmado" style="background-color: orange;">CONFIRMADO</option>'
            + '<option value="preparando" style="background-color: rgb(255, 240, 51);">PREPARANDO</option>'
            + '<option value="enviando" style="background-color: rgb(51, 255, 206);">ENVIANDO</option>'
            + '<option value="cancelado" style="background-color: rgb(224, 51, 255);">CANCELADO</option>'
            + '<option value="entregado" style="background-color: rgb(119, 182, 220);">ENTREGADO</option>'
            + '</select>')*/
    order_tr.appendChild(order_status_td);
    //console.dir(order_tr)

    // ORDER TIME TABLE DATA
    var order_time = order.time;
    var order_time_td = document.createElement("TD");
    order_tr.appendChild(order_time_td);
    order_time_td.innerHTML = order_time;
    order_time_td.setAttribute("class", "td");

    // ORDER ID TABLE DATA
    var order_id = order.id;
    var order_id_td = document.createElement("TD");
    order_tr.appendChild(order_id_td);
    order_id_td.innerHTML = "#" + order_id;
    order_id_td.setAttribute("class", "td");

    // ORDER DESCRIPTION TABLE DATA
    var order_description = order.description;
    var order_description_td = document.createElement("TD");
    order_tr.appendChild(order_description_td);
    order_description_td.innerHTML = order_description;
    order_description_td.setAttribute("class", "td fixed_width");

    // ORDER PAYMENT TABLE DATA
    var order_total_td = document.createElement("TD");

    // Payment method icon
    var order_payment_icon = document.createElement("I");
    order_payment_icon.setAttribute("class", "material-icons icon");

    if (order.payment_method === "efectivo") {
      order_payment_icon.innerHTML = "account_balance_wallet";
    } else {
      order_payment_icon.innerHTML = "credit_card";
    }

    // Total
    var order_total = order.total;
    var total_container = document.createElement("span");
    total_container.setAttribute("class", "total_container");
    total_container.innerHTML = order_total;
    order_payment_icon.appendChild(total_container)
    order_total_td.appendChild(order_payment_icon);
    order_tr.appendChild(order_total_td);
   

    // ORDER USER TABLE DATA
    var order_full_name = order.full_name;
    var order_full_name_td = document.createElement("TD");
    order_tr.appendChild(order_full_name_td);
    order_full_name_td.innerHTML = order_full_name;
    order_full_name_td.setAttribute("class", "td");

    // ORDER ADDRESS TABLE DATA
    var order_address = order.address;
    var order_address_td = document.createElement("TD");
    order_address_td.innerHTML = order_address;
    order_address_td.setAttribute("class", "td");
    order_tr.appendChild(order_address_td);

    // ORDER DROPDOWN MENU TABLE DATA

    // Delete order btn 
    var delete_order_btn = document.createElement("ICON")
    delete_order_btn.innerHTML = "borrar"
    delete_order_btn.setAttribute("class", "material-icons");
    delete_order_btn.innerHTML = "delete";
    delete_order_btn.setAttribute("id", "delete_btn" + order.id)
    delete_order_btn.addEventListener("click", function(event) {
      delete_order(event)
    })

    // Dropdown menu data cell
    var menu_td = document.createElement("TD");

    // Children and parents assignment
    menu_td.appendChild(delete_order_btn)
    order_tr.appendChild(menu_td);

    // Dropdown materialize init
    var elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems);
    // M.Dropdown.init( document.querySelectorAll('.dropdown-trigger'));
  });
};

/* LOAD ADMIN PANEL */

var orders_array;

const load_admin_panel = () => {
  var url_get_all_orders = `${ip_address}/api/orders/get_all`;
  // "http://" + ip_address + ":" + port + "/orders/get_all";

  var token = sessionStorage.getItem("Token");

  //var header = new Headers();
  var orders_get_all = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
    cache: "default",
  };

  fetch(url_get_all_orders, orders_get_all)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //console.log(data)
      orders_array = data.orders_array;
      console.log(orders_array);
      print_order_in_panel();
      return data;
    })
    .catch(function (error) {
      console.log("Error al ejecutar Fetch " + error);
      return error;
    });
};
