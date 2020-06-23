/* MATERIALIZE INIT */

document.addEventListener('DOMContentLoaded', function() { 
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems); 
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
});


/* LINK FUNCTIONS */

const go_to_get_all_products = () => {
    window.location.href = "../public/get_all_products.html";
}

const go_to_order_status = () => {
    window.location.href = "../public/order_status.html";
}

const go_to_login = () => {
    window.location.href = "../public/index.html";
}

const go_to_check_order = () => {
    window.location.href = "../public/check_order.html";
}


/* PRINT PRODUCT */

const print_product = () => {
    
    products_array.forEach(function (product) {

        product.cant = 0;

        var product_container = document.createElement("DIV")
        product_container.setAttribute('class', 'product_container')
        
        var product_img = document.createElement("IMG")
        product_img.setAttribute('src', product.url_img)
        product_img.setAttribute('class', 'product_img')
       
        var product_name = document.createElement("H2")
        product_name.innerHTML = product.name 
        product_name.setAttribute('class', 'product_name')
        
        var product_price = document.createElement("H3")
        product_price.innerHTML = product.price
        product_price.setAttribute('class', 'product_price')

        var product_btn = document.createElement("A")
        product_btn.setAttribute('class', 'btn-floating product_btn')
        product_btn.innerHTML = "+"
        product_btn.setAttribute("onclick", "add_product_to_order(event)");
        product_btn.setAttribute("id", product.id)
     
        var cant_div_id = product.id + "divcant"
        var cant_div = document.createElement("DIV")
        cant_div.setAttribute("id", cant_div_id)
        
        product_container.appendChild(product_name)
        product_container.appendChild(product_price)
        product_container.appendChild(product_img)
        product_container.appendChild(product_btn)
        product_price.append(cant_div)
        var products_container = document.getElementById("products_container")
        products_container.appendChild(product_container)
    })
}


/* GET ALL PRODUCTS */

var products_array 

var url_get_all_products = `${ip_address}/api/products/get_all`;

const get_all_products = () => {

    var token = sessionStorage.getItem('Token')
    
    //var header = new Headers();
    var products_get_all = {
        method: 'GET',
        headers: {
            Authorization: "Bearer " + token 
        },
        cache: 'default'
    };
    
    fetch(url_get_all_products,
        products_get_all)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            products_array = data.products_array
            print_product()
            return data
        })
        .catch(function (error) {
            console.log('Error al ejecutar Fetch ' + error);
            return error
        })
}

/* ADD PRODUCT TO ORDER */

const add_product_to_order = (event) => {

    var product_id = event.target.id 

    products_array.forEach(function (product) {

        if(product.id == product_id) {
            //product.cant = product.cant + 1
            product.cant++
            var cant_div = document.getElementById(product.id + "divcant")
            cant_div.setAttribute('class', 'div_cant')
            cant_div.innerHTML = product.cant
        }
    })
}


/* SEE ORDER */

const see_order_btn = () => {

    ordered_products_array = products_array.filter(function (product) {

        if(product.cant !== 0) {
            // ALTERNATIVE
            //ordered_products_array = []
            //ordered_products_array.push(product)
            go_to_check_order()
            return true
        } 

    })
    
    console.log(ordered_products_array)
    localStorage.setItem('ordered_products_array', JSON.stringify( ordered_products_array))
}