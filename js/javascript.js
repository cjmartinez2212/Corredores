function ganador() {

    let corredor1 = document.getElementById('corredor1').value
    let edad1 = document.getElementById('edad1').value
    let tiempo1 = document.getElementById('tiempo1').value

    let corredor2 = document.getElementById('corredor2').value
    let edad2 = document.getElementById('edad2').value
    let tiempo2 = document.getElementById('tiempo2').value

    if ((parseInt(corredor1) === "" || edad1 === "" || tiempo1 === "" || (parseInt(corredor2) === "" ||  edad2 === "" || tiempo2 === ""){
        swal("Diligencia todos los campos")
    }
    else if(tiempo2<tiempo1){
        swal({
            title: "Ganador el Corredor2"
            text: `Corredor: ${corredor2} Edad: ${edad2} Tiempo: ${tiempo2}`,
            icon: "Succes",
        });
        
    }    

    else if(tiempo2>tiempo1){
            swal({
                title: "Ganador el Corredor2"
                text: `Corredor: ${corredor1} Edad: ${edad1} Tiempo: ${tiempo1}`,
                icon: "Succes",
            });
    }

    else if(tiempo1===tiempo2){
        swal({
            title: "Es empate",
            text: "¡Felicitaciones",
            icon: "Succes",
        });
    }    
   
}