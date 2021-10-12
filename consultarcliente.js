function consultarcliente(){

    $.ajax({
        url: "https://gada9b0fed1a0c7-reto1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            mostrarRespuesta_cl(respuesta.items);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            //console.log(status);
        }
        
    });

}

function mostrarRespuesta_cl(items){
   
    var tabla = `<table border="1">
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>AGE</th>                    
                    <th>ACCIONES</th>
                  </tr>`;
                  
    
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].name}</td>
                   <td>${items[i].email}</td>
                   <td>${items[i].age}</td>                   
                   <td>
                        <button onclick="eliminarcliente(${items[i].id})">Eliminar</button>
                        <a href="detalle_cl.html?id=${items[i].id}">Editar</a>
                   </td> 
                   </tr>`;
 
    }
    tabla +=`</table>`;

    $("#tabla_cl").html(tabla);
}
