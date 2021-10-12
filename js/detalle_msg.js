$(document).ready(function () {
    console.log("document ready!");
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id')){
        let id = searchParams.get('id')
        consultarById(id);
    }
});

function consultarById(id){
    $.ajax({
        url: "https://gada9b0fed1a0c7-reto1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            if (respuesta.items.length==1){
                llenarDatos_msg(respuesta.items[0]);
            }else{
                $("#boton").hide();
                alert('Número no existe.'+id);
            }
        },
        error: function (xhr, status) {
            alert('Ha sucedido un problema.');
        }
    });
}

function llenarDatos_msg(item){
    $("#id_msg").val(item.id);
    $("#messagetext").val(item.messagetext);
}