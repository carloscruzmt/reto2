function eliminarcliente(identificador){
    console.log("ejecutando funcion para eliminar");

    let client = {
        id: +identificador
    };

    console.log(client);

    $.ajax({
        url: "https://gada9b0fed1a0c7-reto1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(client),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el usuario');
            }
        },
    });


}
