function eliminarmensaje(identificador){
    console.log("ejecutando funcion para eliminar");

    let message = {
        id: +identificador
    };

    console.log(message);

    $.ajax({
        url: "https://gada9b0fed1a0c7-reto1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(message),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el mensaje');
            }
        },
    });
    consultarmensaje();

}
