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
        url: "https://gada9b0fed1a0c7-reto1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            if (respuesta.items.length==1){
                llenarDatos_cl(respuesta.items[0]);
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

function llenarDatos_cl(item){
    $("#id_cl").val(item.id);
    $("#name_cl").val(item.name);
    $("#email").val(item.email);
    $("#age").val(item.age);
}