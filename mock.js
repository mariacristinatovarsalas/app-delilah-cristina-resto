// USER ACTIONS

// SIGN UP RESPONSE

const signup_res = { msg: "User created successfully" }





// LOGIN RESPONSE

const login_res = [
  {
    id: 48,
    username: 'britney_spears',
    full_name: 'Britney Spears',
    email: 'britneyspears@gmail.com',
    phone_number: 887564573,
    address: 'Patrick 1265, Washington D.C.',
    password: 'pop',
    cod_role: 1
  }
]

const login_res_admin = [

  {
    id: 45,
    username: 'michael_jackson',
    full_name: 'Michael Jackson',
    email: 'michaeljackson@gmail.com',
    phone_number: 4294967295,
    address: 'St. James 1987, Washington',
    password: 'ayuwoki',
    cod_role: 2
  }
]





// GET ALL PRODUCTS RESPONSE 

const get_all_products_res = 

 [

  {
      id: 52,
      name: "Veggie Sandwich",
      price: 360,
      url_img: "https://cdn.kiwilimon.com/recetaimagen/16320/th5-640x426-8269.jpg",
      code: "SandVeg"
  },
  {
      id: 54,
      name: "Ensalada Veggie",
      price: 370,
      url_img: "https://cookieandkate.com/images/2018/02/chopped-greek-salad-with-homemade-greek-vinaigrette-550x824.jpg",
      code: "EnsVeg"
  },
  {
      id: 77,
      name: "Tabule",
      price: 350,
      url_img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/ffe79fd5-f498-4b89-a2ea-bea00b81ed57/Derivates/8eb8e221-11db-4a8d-b701-59b24aebbfb1.jpg",
      code: "Tab"
  },
  {
      id: 79,
      name: "Hamburguesa Class",
      price: 410,
      url_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYrG2WTl4Qst9-A4sKKCP5TOMtXwEylgYDz4bpgKKEZXNneNcE&usqp=CAU",
      code: "HamCla"
  },
  {
      id: 80,
      name: "Avocado Sandwich",
      price: 380,
      url_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsTDaWI_3twNjO4-SEUb5dslisxOK-jvIbLxC1meeA0WsthOnR&usqp=CAU",
      code: "AvoSand"
  },
  {
      id: 82,
      name: "Lemon Pie",
      price: 240,
      url_img: "https://placeralplato.com/files/2015/06/lemon-pie-640x480.jpg?width=1200&enable=upscale",
      code: "LemPi"
  }]








// MAKE ORDER RESPONSE

const make_order_res = { msg: "Order created successfully", id: 276 }

// CHECK ORDER STATUS RESPONSE

const order_status = {

      id: 1,
      id_user: 6,
      total: 740,
      address: "Patrick 1265, Washington D.C.",
      id_payment: 1,
      id_status: 1,
      time: "12:43",
      description: "2xEnsVeg",
      date: "18/6/2020",
      status: "nuevo",
      payment_method: "efectivo"
}





// ADMIN ACTIONS

// CREATE PRODUCT RESPONSE

const create_product_res = { msg: "Product created successfully" }

// UPDATE PRODUCT RESPONSE

const update_product_res = { msg: "Product updated successfully" }

// DELETE PRODUCT RESPONSE

const delete_product_res = { msg: "Product updated" }

// UPDATE ORDER STATUS RESPONSE

const update_order_status_res = { msg: "Order status updated" }






// GET ALL ORDERS RESPONSE

const get_all_orders_res = [
  
      {
          id: 1,
          id_user: 3,
          total: 740,
          address: "Patrick 1265, Washington D.C.",
          id_payment: 1,
          id_status: 1,
          time: "16:30",
          description: "2xSandVeg",
          date: "9/6/2020",
          status: "nuevo",
          payment_method: "efectivo",
          full_name: "Britney Spears"
      },

      {
          id: 2,
          id_user: 6,
          total: 740,
          address: "Patrick 1265, Washington D.C.",
          id_payment: 1,
          id_status: 1,
          time: "16:31",
          description: "2xSandVeg",
          date: "9/6/2020",
          status: "nuevo",
          payment_method: "efectivo",
          full_name: "Britney Spears"
      },

      {
          id: 3,
          id_user: 5,
          total: 740,
          address: "Patrick 1265, Washington D.C.",
          id_payment: 1,
          id_status: 1,
          time: "12:43",
          description: "2xEnsVeg",
          date: "18/6/2020",
          status: "nuevo",
          payment_method: "efectivo",
          full_name: "Britney Spears"
      },

      {
          id: 4,
          id_user: 2,
          total: 740,
          address: "Patrick 1265, Washington D.C.",
          id_payment: 1,
          id_status: 1,
          time: "12:43",
          description: "2xEnsVeg",
          date: "18/6/2020",
          status: "nuevo",
          payment_method: "efectivo",
          full_name: "Britney Spears"
      },

      {
          id: 5,
          id_user: 7,
          total: 720,
          address: "Patrick 1265, Washington D.C.",
          id_payment: 1,
          id_status: 1,
          time: "17:17",
          description: "2xSandVeg",
          date: "18/6/2020",
          status: "nuevo",
          payment_method: "efectivo",
          full_name: "Britney Spears"
      },

      {
          id: 6,
          id_user: 10,
          total: 720,
          address: "Patrick 1265, Washington D.C.",
          id_payment: 1,
          id_status: 1,
          time: "11:33",
          description: "2xSandVeg",
          date: "19/6/2020",
          status: "nuevo",
          payment_method: "efectivo",
          full_name: "Britney Spears"
      },

      {
          id: 7,
          id_user: 9,
          total: 720,
          address: "Patrick 1265, Washington D.C.",
          id_payment: 1,
          id_status: 1,
          time: "11:34",
          description: "2xSandVeg",
          date: "19/6/2020",
          status: "nuevo",
          payment_method: "efectivo",
          full_name: "Britney Spears"
      },

      {
          id: 8,
          id_user: 11,
          total: 720,
          address: "Patrick 1265, Washington D.C.",
          id_payment: 1,
          id_status: 1,
          time: "11:35",
          description: "2xSandVeg",
          date: "19/6/2020",
          status: "nuevo",
          payment_method: "efectivo",
          full_name: "Britney Spears"
      },

      {
          id: 9,
          id_user: 1,
          total: 740,
          address: "Patrick 1265, Washington D.C.",
          id_payment: 1,
          id_status: 2,
          time: "1:27:",
          description: "2xSandVeg",
          date: "4/5/2020",
          status: "confirmado",
          payment_method: "efectivo",
          full_name: "Britney Spears"
      },

      {
          id: 10,
          id_user: 4,
          total: 370,
          address: "Patrick 1265, Washington D.C.",
          id_payment: 1,
          id_status: 2,
          time: "1:27:",
          description: "2xSandVeg",
          date: "4/5/2020",
          status: "confirmado",
          payment_method: "efectivo",
          full_name: "Britney Spears"
      },

      {
          id: 11,
          id_user: 2,
          total: 740,
          address: "Patrick 1265, Washington D.C.",
          id_payment: 1,
          id_status: 2,
          time: "1:56:",
          description: "2xEnsVeg",
          date: "4/5/2020",
          status: "confirmado",
          payment_method: "efectivo",
          full_name: "Britney Spears"
      },
          
    ]









      
// GET ALL USERS RESPONSE 

  const get_all_users_res = [
      {
          id: 1,
          username: "michael_jackson",
          full_name: "Michael Jackson",
          email: "michaeljackson@gmail.com",
          phone_number: 4294967295,
          address: "St. James 1987, Washington",
          password: "ayuwoki",
          cod_role: 2
      },

      {
          id: 2,
          username: "britney_spears",
          full_name: "Britney Spears",
          email: "britneyspears@gmail.com",
          phone_number: 887564573,
          address: "Patrick 1265, Washington D.C.",
          password: "pop",
          cod_role: 1
      },

      {
          id: 3,
          username: "calamardo",
          full_name: "Calamardo Esponja",
          email: "calamardo@gmail.com",
          phone_number: 2345798744,
          address: "Estrella de Mar 345, Atlantico D.F.",
          password: "Bob",
          cod_role: 1
      },

      {
          id: 4,
          username: "picapiedra",
          full_name: "Pedro Picapiedra",
          email: "picapiedra@gmail.com",
          phone_number: 987654321,
          address: "Piedra Vista 111, Piedra Blanda D.F.",
          password: "Vilma",
          cod_role: 1
      },

      {
          id: 4,
          username: "barney",
          full_name: "Barney Dinosaur",
          email: "barneydinosaur@gmail.com",
          phone_number: 768574638,
          address: "Extintion 123, Cretasius D.F.",
          password: "meteorite",
          cod_role: 1
      },

      {
          id: 5,
          username: "frodo",
          full_name: "Frodo Baggins",
          email: "frodobaggins@gmail.com",
          phone_number: 56744983,
          address: "Bagshot Row, Hobbiton, The Shire",
          password: "98765",
          cod_role: 1
      },
      {
          id: 6,
          username: "carlotica",
          full_name: "Carlotica Toro",
          email: "carloticatoro@gmail.com",
          phone_number: 346578245,
          address: "North Pole",
          password: "45d8893s",
          cod_role: 1
      },

      {
          id: 7,
          username: "blancanieves",
          full_name: "Blanca Nieves",
          email: "blancanieves@gmail.com",
          phone_number: 334567554,
          address: "A Cave, Green Valley 234",
          password: "enanitos",
          cod_role: 1
      },

      {
          id: 8,
          username: "charliepapa",
          full_name: "Charlie Papa",
          email: "charliepapa@gmail.com",
          phone_number: 4294967295,
          address: "Aníbal Troilo 969, CABA",
          password: "123456",
          cod_role: 1
      },

      {
          id: 9,
          username: "pedrito",
          full_name: "Pedro Pérez",
          email: "pedroperez@gmail.com",
          phone_number: 444554433,
          address: "Av. La Saltena 445, CABA",
          password: "123456",
          cod_role: 1
      },

      {
          id: 10,
          username: "yugioh",
          full_name: "Yugi Oh",
          email: "yugioh@gmail.com",
          phone_number: 337483929,
          address: "Av. Crosstown 555",
          password: "yugioh",
          cod_role: 1
      },

      
      {
          id: 11,
          username: "chomsky",
          full_name: "Chomsky Pérez",
          email: "chomsky@gmail.com",
          phone_number: 346578245,
          address: "Walden St. 345, Alabama",
          password: "4556yer",
          cod_role: 1
      }

  ]


  module.exports = {

    get_all_products_res : get_all_products_res,
    login_res : login_res,
    login_res_admin : login_res_admin,
    signup_res : signup_res,
    get_all_orders_res : get_all_orders_res,
    get_all_users_res : get_all_users_res
  

};