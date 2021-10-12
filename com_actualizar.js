function com_actualizar(){
    console.log("ejecutando funcion para actualizar");

    let computador = {
        id: +$("#id").val(),
        brand:  $("#brand").val(),
        model: +$("#model").val(),
        category_id: +$("#category_id").val(),
        name: $("#name").val()
    };

    console.log(computador);

    $.ajax({
        url: "https://g2cf131e8b72bef-db202109301853.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computador),
        statusCode:{
            201:function(){
                alert('Se ha actualizado el computador');
            }
        },
    });
}


