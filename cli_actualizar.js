function cli_actualizar(){
    console.log("ejecutando funcion para actualizar");

    let cliente = {
        id: +$("#id").val(),
        name:  $("#name").val(),
        email: $("#email").val(),
        age: +$("#age").val(),
    };

    console.log(cliente);

    $.ajax({
        url: "https://g2cf131e8b72bef-db202109301853.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
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


