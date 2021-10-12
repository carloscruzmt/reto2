	// Agregar Mensaje // 
function guardarM(){
    let mensaje = {
        id: +$("#ID").val(),
        messagetext:  $("#MESSAGETEXT").val()
    };

    console.log("voy a guardar", mensaje);

    $.ajax({
        url: "https://g2c9a808e9381c9-reto2.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(mensaje),
        statusCode:{
            201:function(){
                consultarM();
                console.log('Se ha registrado un nuevo Mensaje');
            }
        },
    });
    $("#ID").val(""),
    $("#MESSAGETEXT").val("")
}


	// Agregar Cliente //
function guardarC(){
    let cliente = {
        id: +$("#ID").val(),
        name:  $("#NAME").val(),
        email: $("#EMAIL").val(),
        age: +$("#AGE").val(),
    };

    console.log("voy a guardar", cliente);

    $.ajax({
        url: "https://g2c9a808e9381c9-reto2.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cliente),
        statusCode:{
            201:function(){
                consultarC();
                console.log('Se ha registrado un nuevo Cliente');
            }
        },
    });
    $("#ID").val(""),
    $("#NAME").val(""),
    $("#EMAIL").val(""),
    $("#AGE").val("")
}


	// Agregar Computador //
function guardar(){
    let computador = {
        id: +$("#ID").val(),
        brand:  $("#BRAND").val(),
        model: +$("#MODEL").val(),
        category_id: +$("#CATEGORY_ID").val(),
        name: $("#NAME").val()
    };

    console.log("voy a guardar", computador);

    $.ajax({
        url: "https://g2c9a808e9381c9-reto2.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computador),
        statusCode:{
            201:function(){
                consultar();
                console.log('Se ha registrado un nuevo computador');
            }
        },
    });
    $("#ID").val(""),
    $("#BRAND").val(""),
    $("#MODEL").val(""),
    $("#CATEGORY_ID").val(""),
    $("#NAME").val("")
}