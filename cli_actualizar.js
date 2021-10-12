function cli_actualizar(){
    console.log("ejecutando funcion para actualizar");

    let cliente = {
        id: +$("#id_cl").val(),
        name:  $("#name_cl").val(),
        email: $("#email").val(),
        age: +$("#age").val(),
    };

    console.log(cliente);

    $.ajax({
        url: "https://gada9b0fed1a0c7-reto1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cliente),
        statusCode:{
            201:function(){
                alert('Se ha actualizado el cliente');
            }
        },
    });
}


