/* MATERIALIZE INIT */

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
});

/* LINK FUNCTIONS */

const go_to_get_all_products = () => {
    window.location.href = "./get_all_products.html";
}

const go_to_order_status = () => {
    window.location.href = "../public/order_status.html";
}

const go_to_login = () => {
    window.location.href = "../public/index.html";
}

/* PRINT ORDER STATUS */

var order_status

const print_order_status = () => {

    switch (order_status.order_status.status) {

        case "confirmado":
            var status_div_confirmado = document.getElementById("div_status_confirmado")
            status_div_confirmado.style.color = "#FF7F50"
            var status_circle_confirmado = document.getElementById("div_circle_confirmado")
            status_circle_confirmado.setAttribute("class", "status_circle_on progress_div_circle")
        break;      

        case "preparando":
            var status_div_preparando = document.getElementById("div_status_preparando")
            status_div_preparando.style.color = "#FF7F50"
            var status_circle_preparando = document.getElementById("div_circle_preparando")
            status_circle_preparando.setAttribute("class", "status_circle_on progress_div_circle")
        break;    

        case "enviando":
            var status_div_enviando = document.getElementById("div_status_enviando")
            status_div_enviando.style.color = "#FF7F50"
            var status_circle_enviando = document.getElementById("div_circle_enviando")
            status_circle_enviando.setAttribute("class", "status_circle_on progress_div_circle")
        break; 
        
        case "entregado":
            var status_div_entregado = document.getElementById("div_status_entregado")
            status_div_entregado.style.color = "#FF7F50"
            var status_circle_entregado = document.getElementById("div_circle_entregado")
            status_circle_entregado.setAttribute("class", "status_circle_on progress_div_circle")
        break;    

    }

    var array_products_ordered = JSON.parse(sessionStorage.getItem('final_ordered_products_array'));
    console.log(array_products_ordered)

    array_products_ordered.forEach(function (product) {

        // PRODUCT CONTAINER
        var product_container = document.createElement("DIV")
        product_container.setAttribute('class', 'product_container')
        
        // PRODUCT IMG
        var product_img = document.createElement("IMG")
        product_img.setAttribute('src', product.url_img)
        product_img.setAttribute('class', 'product_img')
       
        // PRODUCT NAME
        var product_name = document.createElement("H2")
        product_name.innerHTML = product.name 
        product_name.setAttribute('class', 'product_name')
        
        // PRODUCT PRICE
        var product_price = document.createElement("H3")
        product_price.innerHTML = product.price
        product_price.setAttribute('class', 'product_price')
     
        // PRODUCT CANT
        var cant_div_id = product.id + "divcanto"
        var product_cant = document.createElement("DIV")
        product_cant.setAttribute("id", cant_div_id)
        product_cant.setAttribute("class", "div_cant_order_check div_cant")
        product_cant.innerHTML = product.cant

        // ASSIGN CHILDREN TO PARENTS
        product_container.appendChild(product_name)
        product_container.appendChild(product_price)
        product_container.appendChild(product_img)
        product_container.appendChild(product_cant)
        var ordered_products_container = document.getElementById("ordered_products_container")
        ordered_products_container.appendChild(product_container)

    })

    // TOTAL
    var total_div = document.getElementById("total_div")
    total_div.setAttribute("class", "div_total")
    var total = order_status.order_status.total
    total_div.innerHTML = "Total: " + total

    // PAYMENT METHOD
    var payment_method_div = document.getElementById("payment_method_div")
    var payment_method = order_status.order_status.payment_method
    payment_method_div.innerHTML = payment_method

    // ADDRESS
    var address_div = document.getElementById("address_div")
    var address = order_status.order_status.address
    address_div.innerHTML = address

}


/* CHECK ORDER STATUS */

const check_order_status = () => {

    var order_id = JSON.parse(sessionStorage.getItem("order_id"))
    var url_get_order_status = `${ip_address}/api/orders/status?id_order=${order_id}`;
    // 'http://' + ip_address + ':' + port + '/orders/get_order_status?id_order=' + order_id;
    var token = sessionStorage.getItem('Token')
    
    var get_order_status = {
        method: 'GET',
        headers: {
            Authorization: "Bearer " + token 
        },
        cache: 'default'
    };
    
    fetch(url_get_order_status,
        get_order_status)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            order_status = data
            print_order_status()
            return data
        })
        .catch(function (error) {
            console.log('Error al ejecutar Fetch ' + error);
            return error
        })
}