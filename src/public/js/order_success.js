/* MATERIALIZE INIT */

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
});

/* LINK FUNCTIONS */

const go_to_order_status = () => {
    // window.location.href = "../public/order_status.html";
    window.location.href = "./order_status.html";
}

const go_to_login = () => {
    // window.location.href = "../public/index.html";
    window.location.href = "./index.html";
}