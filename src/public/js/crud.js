/* PRODUCT CRUD <---------------------------- */

/* LINK FUNCTIONS */

const go_to_crud = () => {
    // window.location.href = "../public/crud.html";
    window.location.href = "./crud.html";
}

const go_to_get_all_users = () => {
    // window.location.href = "../public/get_all_users.html";
    window.location.href = "./get_all_users.html";
    document.getElementById("go_to_users_btn").style.backgroundColor = "white"
}

const go_to_panel_admin = () => {
    // window.location.href = "../public/panel_admin.html";
    window.location.href = "./panel_admin.html";
}

const go_to_login = () => {
    // window.location.href = "../public/index.html";
    window.location.href = "./index.html";
}



/* CANCEL PRODUCT CREATION */

const cancel_create_product = () => {

    document.getElementsByClassName("div_create_product_bars").style.display = "none"
}


/* CREATE PRODUCT */

const create_product = async () => {

    document.getElementById("div_create_product_bars").style.display = "inline-block"
    var product_name = document.getElementById("create_product_name_bar").value  
    var product_price = document.getElementById("create_product_price_bar").value
    var product_url = document.getElementById("create_product_url_bar").value
    var product_code = document.getElementById("create_product_code_bar").value

    var token = sessionStorage.getItem('Token')

    var url_create_product = `${ip_address}/api/products/create`;

    if(product_name || product_price || product_url || product_code !== "") { 

        data_create_product = {

            name: product_name,
            price: product_price,
            url_img: product_url,
            code: product_code

        }

        var res = await fetch(url_create_product, {
            method: 'POST',
            body: JSON.stringify(data_create_product),
            headers: {
                 Authorization: "Bearer " + token,
                'Content-Type': 'application/json'
            }
        })
    
        var data = await res.json();
        console.log(data)

        if(data.msg == "Product created successfully") {
            go_to_crud()
        }

    }

}



/* DELETE PRODUCT */

async function delete_product (event) {

    //event.preventDefault()

    var product_id = event.target.id.slice(14,16)
    console.log(product_id)

    var url_delete_product = `${ip_address}/api/products/delete?id=${product_id}`;
    // 'http://' + ip_address + ':' + port + '/products/delete?id=' + product_id;
    var token = sessionStorage.getItem('Token')
    console.log(token)
        
    var my_header = new Headers();
    my_header.append("Authorization", "Bearer " + token)
    my_header.append("Content-Type", "application/json");
    
    data_delete_product = {id: product_id}
    
        var res = await fetch(url_delete_product, {
            method: 'DELETE',
            headers: my_header,
            redirect: 'follow'
        })
    
        var data = await res.json();
        console.log(data)

        if (data.msg == "Product deleted") {
            go_to_crud()
        }

}
    

/* CANCEL PRODUCT UPDATE */

function cancel_update (event) {

    var product_id = event.target.id.slice(17,19)
    document.getElementById("update_bars_div" + product_id).style.display = "none"
    
}


/* UPDATE PRODUCT */

async function update_product (event) {

    event.preventDefault()
    var product_id = event.target.id.slice(14,17)
    var name_new = document.getElementById("new_name_bar" + product_id).value
    var price_new = document.getElementById("new_price_bar" + product_id).value
    document.getElementById("update_bars_div" + product_id).style.display = "inline-block"
    document.getElementById("cancel_update_btn" + product_id).style.display = "inline-block"
    
    var url_update_product = `${ip_address}/api/products/update`
    // 'http://' + ip_address + ':' + port + '/products/update';
    var token = sessionStorage.getItem('Token')

    var my_header = new Headers();
    my_header.append("Authorization", "Bearer " + token)
    my_header.append("Content-Type", "application/json");

    
    if(name_new || price_new !== "") { 

        data_update_product = {

            id: product_id,
            new_name: name_new,
            new_price: price_new

        }   

        var res = await fetch(url_update_product, {
            method: 'PUT',
            headers: my_header,
            body: JSON.stringify(data_update_product),
            redirect: 'follow'
        })

        var data = await res.json();
        console.log(data)

        if (data.msg == "Product updated successfully") {
            go_to_crud()
        }
    } 
}


/* PRINT PRODUCT  */

const print_product = () => {
    
    products_array.forEach(function (product) {

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

        // DELETE PRODUCT  

        // Delete product button icon 
        var delete_product_btn_icon = document.createElement("i")
        delete_product_btn_icon.setAttribute("class", "material-icons")
        delete_product_btn_icon.innerHTML = "delete"
        delete_product_btn_icon.setAttribute("id", "delete_product" + product.id)
        delete_product_btn_icon.addEventListener("click", function (event) { delete_product(event) })

        // Delete product button 
        var delete_product_btn = document.createElement("A")
        delete_product_btn.setAttribute('class', 'btn-floating product_btn delete_product_btn')

        // UPDATE PRODUCT 
        
        // Update product button icon 
        var update_product_btn_icon = document.createElement("i")
        update_product_btn_icon.setAttribute("class", "material-icons icon")
        update_product_btn_icon.innerHTML = "sync"
        update_product_btn_icon.setAttribute("id", "update_product" + product.id)
        update_product_btn_icon.addEventListener("click", function (event) { update_product(event) })

        // Update product button 
        var update_product_btn = document.createElement("A")
        update_product_btn.setAttribute('class', 'btn-floating update_product_btn product_btn')
        // update_product_btn.setAttribute("id", "update" + product.id)
        // update_product_btn.innerHTML = "&#128259;"
        // update_product_btn.addEventListener("click", function (event) { update_product(event) })

        // UPDATE PRODUCT BARS
        var new_name_bar = document.createElement("INPUT")
        new_name_bar.setAttribute("class", "input browser-default")
        new_name_bar.setAttribute("type", "text")
        new_name_bar.setAttribute("placeholder", "Nuevo nombre")
        new_name_bar.setAttribute("id", "new_name_bar" + product.id)
        var new_price_bar = document.createElement("INPUT")
        new_price_bar.setAttribute("class", "input browser-default")
        new_price_bar.setAttribute("type", "text")
        new_price_bar.setAttribute("placeholder", "Nuevo precio")
        new_price_bar.setAttribute("id", "new_price_bar" + product.id)

        // CANCEL UPDATE BUTTON
        var cancel_update_btn = document.createElement("BUTTON")
        cancel_update_btn.setAttribute("id", "cancel_update_btn" + product.id)
        cancel_update_btn.innerHTML = "cancelar"
        cancel_update_btn.style.display = "none"
        cancel_update_btn.setAttribute("class", "cancelar_btn")
        cancel_update_btn.addEventListener("click", function (event) { cancel_update(event) })

        // UPDATE PRODUCT BARS DIV
        var update_bars_div = document.createElement("DIV")
        update_bars_div.setAttribute("id", "update_bars_div" + product.id)
        update_bars_div.style.display = "none"
        update_bars_div.setAttribute("class", "update_bars_div")
        update_bars_div.appendChild(new_name_bar)
        update_bars_div.appendChild(new_price_bar)
        update_bars_div.appendChild(cancel_update_btn)

        // WARNING DIV
        var warning_div = document.createElement("DIV")
        warning_div.setAttribute("id", "warning_div_update")
        warning_div.innerHTML = "Debe escribir el nombre del producto"       


        // ASIGN CHILDREN TO PARENT (PRODUCT CONTAINER)
        var product_container = document.createElement("DIV")
        product_container.setAttribute('class', 'product_container')
        product_container.insertBefore(product_img, product_container.firstChild)
        product_container.appendChild(product_name)
        product_container.appendChild(product_price)
        update_product_btn.appendChild(update_product_btn_icon)
        product_container.appendChild(update_product_btn)
        delete_product_btn.appendChild(delete_product_btn_icon)
        product_container.appendChild(delete_product_btn)
        product_container.appendChild(update_bars_div)
        //product_container.appendChild(cancel_update_btn)
        
        var products_container = document.getElementById("products_container")
        products_container.appendChild(product_container)

    })
}


/* GET ALL PRODUCTS ADMIN */

var products_array 

var url_get_all_products = `${ip_address}/api/products/get_all`;
// 'http://' + ip_address + ':' + port + '/products/get_all';

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
