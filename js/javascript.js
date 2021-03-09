function ganador() {

    let corredor1 = document.getElementById('corredor1').value
    let edad1 = document.getElementById('edad1').value
    let tiempo1 = document.getElementById('tiempo1').value

    let corredor2 = document.getElementById('corredor2').value
    let edad2 = document.getElementById('edad2').value
    let tiempo2 = document.getElementById('tiempo2').value

    if (corredor1 === "" ||  edad1 === "" || tiempo1 === "" || corredor2 === "" ||  edad2 === "" || tiempo2 === ""){
        swal("Diligencia todos los campos")
    }

   
}