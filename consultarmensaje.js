function consultarmensaje(){

    $.ajax({
        url: "https://gada9b0fed1a0c7-reto1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            mostrarRespuesta_msg(respuesta.items);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            //console.log(status);
        }
        
    });

}

function mostrarRespuesta_msg(items){
   
    var tabla = `<table border="1">
                  <tr>
                    <th>ID</th>
                    <th>MESSAGETEXT</th>                                       
                    <th>ACCIONES</th>
                  </tr>`;
                  
    
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].messagetext}</td>                                     
                   <td>
                        <button onclick="eliminar(${items[i].id})">Eliminar</button>
                        <a href="detalle.html?id=${items[i].id}">Editar</a>
                   </td> 
                   </tr>`;
 
    }
    tabla +=`</table>`;

    $("#tabla_msg").html(tabla);
}
