function eliminarcliente(identificador){
    console.log("ejecutando funcion para eliminar");

    let client = {
        id: +identificador
    };

    console.log(client);

    $.ajax({
        url: "https://gca4a673ceb8224-computer.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
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