(()=>{let  auth=sessionStorage.getItem("Token")
console.log(auth)
if (!auth ||auth== null ){
    alert("Acceso no autorizado")
window.location.href="../public/index.html"
}
})()