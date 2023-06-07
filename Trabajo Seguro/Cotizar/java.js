document.getElementById('cotizacionForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  

    var edadConductor = parseInt(document.getElementById('edadConductor').value);
    var tipoVehiculo = document.getElementById('tipoVehiculo').value;
    var modeloVehiculo = document.getElementById('modeloVehiculo').value;
  

    var cotizacion = calcularCotizacion(edadConductor, tipoVehiculo, modeloVehiculo);
  
    mostrarResultadoCotizacion(cotizacion);
  });
  
  function calcularCotizacion(edadConductor, tipoVehiculo, modeloVehiculo) {
 
    var cotizacionBase = 1000;
    var factorEdad = 1.2;
    var factorTipoVehiculo = 1.5;
    var factorModeloVehiculo = 1.8;
  
    var cotizacion = cotizacionBase * factorEdad * factorTipoVehiculo * factorModeloVehiculo;
  
    return cotizacion.toFixed(2);
  }
  
  function mostrarResultadoCotizacion(cotizacion) {
    var resultadoElement = document.getElementById('resultadoCotizacion');
    resultadoElement.innerHTML = 'La cotizacion es:$' + cotizacion;
  }