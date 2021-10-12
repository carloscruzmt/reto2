	// Agregar Mensaje // 
function guardarM(){
    let mensaje = {
        id: +$("#id_msg").val(),
        messagetext:  $("#messagetext").val()
    };

    console.log("voy a guardar", mensaje);

    $.ajax({
        url: "https://gada9b0fed1a0c7-reto1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(mensaje),
        statusCode:{
            201:function(){
                consultarmensaje();
                alert('Se ha registrado un nuevo Mensaje');
            }
        },
    });
    $("#id_msg").val(""),
    $("#messagetext").val("")
}


	// Agregar Cliente //
function guardarC(){
    let cliente = {
        id: +$("#id_cl").val(),
        name:  $("#name_cl").val(),
        email: $("#email").val(),
        age: +$("#age").val(),
    };

    console.log("voy a guardar", cliente);

    $.ajax({
        url: "https://gada9b0fed1a0c7-reto1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cliente),
        statusCode:{
            201:function(){
                consultarcliente();
                alert('Se ha registrado un nuevo Cliente');
            }
        },
    });
    $("#id_cl").val(""),
    $("#name_cl").val(""),
    $("#email").val(""),
    $("#age").val("")
}


	// Agregar Computador //
function guardar(){
    let computador = {
        id: +$("#id_pc").val(),
        brand:  $("#brand").val(),
        model: +$("#model").val(),
        category_id: +$("#category_id").val(),
        name: $("#name").val()
    };

    console.log("voy a guardar", computador);

    $.ajax({
        url: "https://gada9b0fed1a0c7-reto1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computador),
        statusCode:{
            201:function(){
                consultarcomputador();
                alert('Se ha registrado un nuevo computador');
            }
        },
    });
    $("#id_pc").val(""),
    $("#brand").val(""),
    $("#model").val(""),
    $("#category_id").val(""),
    $("#name").val("")
}
