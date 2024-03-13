$(document).ready(function() {
  $.ajax({
      type:"GET",
      url: "https://sga.unemi.edu.ec/api?a=apilistaarticulosdocente&cedula=0925115198",
      success: function(data) {
        for(e in data) {
          apellidos = data[e]['apellidos'];
          articulo = data[e]['articulos'];
          fecha = data[e]['fecha'];
          revista = data[e]['revista'];
          base = data[e]['base'];
          enlace = data[e]['links'];
          volumen  = data[e]['volumen'];
          paginas = data[e]['paginas'];
          issn = data[e]['codigoissn'];
          linea = `<tr>
                   <td>${apellidos}</td>
                   <td>${articulo}</td>
                   <td>${fecha}</td>
                   <td>${revista}</td>
                   <td>${base}</td>
                   `
          if(enlace != null) {
            linea += `<td><a href="${enlace}"><i class="fa fa-link"></i></a></td>`
          } else {
            linea += `<td></td>`
          }
          linea += `
                    <td>${volumen}</td>
                    <td>${paginas}</td>
                    <td>${issn}</td>
                    </tr>
                    `
          $(linea).appendTo("#example tbody");
        }
        $('#example').DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": false,
          "ordering": true,
          "info": true,
          "autoWidth": false,
          "responsive": true,
        });
        $(".preloader").fadeOut();
      }
  })
});
