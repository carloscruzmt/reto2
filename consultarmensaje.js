function consultar(){

    $.ajax({
        url: "https://gceec35d4655070-computer.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            mostrarRespuesta(respuesta.items);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            //console.log(status);
        }
        
    });

}

function mostrarRespuesta(items){
   
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

    $("#tabla").html(tabla);
}
