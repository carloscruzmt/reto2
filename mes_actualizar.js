function mes_actualizar(){
    console.log("ejecutando funcion para actualizar");

    let mensaje = {
        id: +$("#id").val(),
        messagetext:  $("#messagetext").val(),
    };

    console.log(mensaje);

    $.ajax({
        url: "https://g2cf131e8b72bef-db202109301853.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
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


