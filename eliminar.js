function eliminar(identificador){
    console.log("ejecutando funcion para eliminar");

    let computer = {
        id: +identificador
    };

    console.log(computer);

    $.ajax({
        url: "https://gada9b0fed1a0c7-reto1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computer),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el computador');
            }
        },
    });


}
