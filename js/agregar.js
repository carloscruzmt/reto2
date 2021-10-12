	// Agregar Mensaje // 
function guardarM(){
    let mensaje = {
        id: +$("#id_msg").val(),
        messagetext:  $("#MESSAGETEXT").val()
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
                //consultarC();
                console.log('Se ha registrado un nuevo Cliente');
            }
        },
    });
    //$("#ID").val(""),
    //$("#NAME").val(""),
    //$("#EMAIL").val(""),
    //$("#AGE").val("")
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
                //consultar();
                console.log('Se ha registrado un nuevo computador');
            }
        },
    });
    //$("#ID").val(""),
    //$("#BRAND").val(""),
    //$("#MODEL").val(""),
    //$("#CATEGORY_ID").val(""),
    //$("#NAME").val("")
}
