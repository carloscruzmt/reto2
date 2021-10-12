function mes_actualizar(){
    console.log("ejecutando funcion para actualizar");

    let mensaje = {
        id: +$("#id_msg").val(),
        messagetext:  $("#messagetext").val(),
    };

    console.log(mensaje);

    $.ajax({
        url: "https://gada9b0fed1a0c7-reto1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(mensaje),
        statusCode:{
            201:function(){
                alert('Se ha actualizado el mensaje');
            }
        },
    });
}


