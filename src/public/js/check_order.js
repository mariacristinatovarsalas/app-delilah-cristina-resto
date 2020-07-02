/* MATERIALIZE INIT */


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
});

/* LINK FUNCTIONS */

const go_to_order_status = () => {
    window.location.href = "../public/order_status.html";
}

const go_to_login = () => {
    window.location.href = "../public/index.html";
}

const go_to_get_all_products = () => {
    window.location.href = "../public/get_all_products.html";
}

const go_to_order_success = () => {
    window.location.href = "../public/order_success.html";
}


/* GET ORDERED PRODUCTS ARRAY IN 'CHECK ORDER' SCREEN */

var description
var product_container_id
var descriptions_array = []
const get_ordered_products_array = () => {

    var array_products_ordered = JSON.parse(localStorage.getItem('ordered_products_array'));
    console.log(array_products_ordered)
    ordered_products_array = array_products_ordered

    array_products_ordered.forEach(function (product) {
        
        // PRODUCT CONTAINER
        var product_container = document.createElement("DIV")
        product_container.setAttribute('class', 'product_container')
        product_container_id = product.id + "chanfle"
        product_container.setAttribute("id", "product_container_id"+product.id)
        
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

        // PRODUCT BTN (REMOVE)
        var product_btn = document.createElement("A")
        product_btn.setAttribute('class', 'btn-floating product_btn product_btn_check_order')
        product_btn.innerHTML = "-"
        product_btn.setAttribute("onclick", "button_remove_product()");
        product_btn.setAttribute("id", product.id)
     
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
        product_container.appendChild(product_btn)
        product_container.appendChild(product_cant)
        var ordered_products_container = document.getElementById("ordered_products_container")
        ordered_products_container.appendChild(product_container)

        // ORDER TOTAL
        product.total = product.cant * product.price

        total = 0

            ordered_products_array.forEach(function (product) {
                 total += product.total;
            })
        
        var total_div = document.getElementById("total_div")
        total_div.innerHTML = "Total: " + total
        total_div.setAttribute("class", "div_total")
        
    })

    // ORDER DATA
    var user = JSON.parse(sessionStorage.getItem('user'))
    var address = document.getElementById("address_div")
    address.innerHTML = user.address
}


/* BUTTON REMOVE PRODUCT IN 'CHECK ORDER' SCREEN */

var total

const button_remove_product = () => {

    var product_id_ = event.target.id
    ordered_products_array.forEach(function (product) {

        if(product.id == product_id_) {

            //product.cant = product.cant + 1 (ALTERNATIVA)
            product.cant = product.cant - 1
            var cant_div = document.getElementById(product.id + "divcanto")
            cant_div.setAttribute('class', 'div_cant_order_check div_cant')
            cant_div.innerHTML = product.cant
            product.total = product.cant * product.price
            console.log(ordered_products_array)

            var zero_cant_products_array = ordered_products_array.filter(product => product.cant == 0) 

            console.log(zero_cant_products_array)

            if(product.cant == "0") {
                var product_container = document.getElementById("product_container_id" + product_id_)
                product_container.style.display = "none"
            }

            if(zero_cant_products_array.length == ordered_products_array.length) {
                var container_product = document.getElementById("product_container_id" + product_id_).style.display = "none"
                    console.log(container_product)
                    document.getElementById("warning_no_product_ordered").style.display = "block"
                    document.getElementById("check_order_small_detalles").style.display = "none"
                    document.getElementById("ordered_products_container").style.display = "none"
                    document.getElementById("total_div").style.display = "none"
                    document.getElementById("check_order_small_formapago").style.display = "none"
                    document.getElementById("check_order_payment_container").style.display = "none"
                    document.getElementById("check_order_small_address").style.display = "none"
                    document.getElementById("address_div").style.display = "none"
                    document.getElementById("current_address_div").style.display = "none"
                    document.getElementById("confirm_order_btn").style.display = "none"
                    document.getElementById("remake_order_btn").setAttribute("class", "order_remake_btn")
                    document.getElementById("no_product_img_container").style.display = "block"  
            }
            
            // TOTAL
            total = 0
            ordered_products_array.forEach(function (product){
                 total += product.total;
            })

            var total_div = document.getElementById("total_div")
            total_div.innerHTML = "Total " + total
            total_div.setAttribute("class", "div_total")

        }
    }) 

   
}



/* BUTTON CHANGE ORDER ADDRESS */

const btn_change_order_address = () => {

    document.getElementById("change_address_btn").style.backgroundColor = "transparent"

    var current_address_div = document.getElementById("current_address_div")
    document.getElementById("current_address_div").style.display = "block"
    var current_address = current_address_div.value

    if (current_address !== "") {
     document.getElementById("address_div").innerHTML = current_address
     current_address_div.style.display = "none"
    }
    
}

/* MAKE ORDER: BUTTON CONFIRM ORDER */

products_array_to_post = []
products_description_array = []


const make_order = () => {

    var url_make_order = `${ip_address}/api/orders/make`;
    var token = sessionStorage.getItem('Token')
    var user = JSON.parse(sessionStorage.getItem('user'))
    var user_id = user.user
    var user_address = document.getElementById("address_div").innerHTML
    var payment_method = document.getElementById("payment_method_select").value
    var array_products_ordered_ = JSON.parse(localStorage.getItem('ordered_products_array'));
    console.log(array_products_ordered_)
    var product_cant

    array_products_ordered_.forEach(function (product) {

        var product_id = product.id
        //var product_cant = product.cant
        product_cant = document.getElementById(product.id + "divcanto").innerHTML
        product.description = product_cant + "x" + product.code
        product_description = product.description
        
       
        product.cant = product_cant 

        if(product.cant !== "0") {
            var product_object = {id: product_id, cant: product_cant, description: product_description}
       products_array_to_post.push(product_object)

        }
       
    })

    console.log(array_products_ordered_)
    sessionStorage.setItem("final_ordered_products_array", JSON.stringify(array_products_ordered_))

    var current_time = new Date(); 
    var time =  
                + current_time.getHours() + ":"  
                + current_time.getMinutes() + ":" 
                + current_time.getSeconds();


    var current_date = new Date(); 
    var date = current_date.getDate() + "/"
                + (current_date.getMonth()+1)  + "/" 
                + current_date.getFullYear()

   
    console.log(products_array_to_post)

    products_array_to_post.forEach(function (product){
        descriptions_array.push(product.description)
    })

    var description = descriptions_array.join(" ")

    var data_make_order =

    {
        id_user: user_id,
        address: user_address,
        id_payment: payment_method,
        products: products_array_to_post,
        time: time,
        date: date,
        description: description
        
    }
    
    console.log(data_make_order)

    fetch(url_make_order, {
        method: 'POST',
        body: JSON.stringify(data_make_order),
        headers: {
          'Content-Type': 'application/json',
           Authorization: "Bearer " + token 
        }
    })
        .then(function (response) {

            if (response.ok) {

               response.json()
                .then((res) => {
                    console.log(res)
                    sessionStorage.setItem("order_id", res.id)
                })
                go_to_order_success()
            return;

            } else {
                console.log('Respuesta de red no OK ');
            }
        })

        .catch(function (error) {
            console.log('Error al ejecutar Fetch ' + error);
     });
}