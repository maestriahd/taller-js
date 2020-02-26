//El evento ready del elemento document se
//dispara cuando el documento está completamente cargado
$(document).ready(function(){
  console.log('Documento listo!!');
  //declaramos una lista de nombres
  let elementos = ["Juana", "Andrés", "Camila", "Jerónimo"];
  elementos.forEach(elemento=>{
    let li = "<li>" + elemento + "</li>";
    $("#lista").append(li);
  });
  //asignamos un evento a un elemento usando .on()
  //cuando el evento click sucede, se ejecuta la función anónima
  $("#reversar").on('click', function(e){
    $("#lista").empty();
    //invertimos el orden de los elementos
    let _elementos = reversar(elementos);
    //iteramos sobre los elemento, agregándolos a la Lista
    // esta es una copia de la función de arriba
    elementos.forEach(elemento=>{
      let li = "<li>" + elemento + "</li>";
      $("#lista").append(li);
    });
  });

});

function reversar(lista){
  lista.reverse();
  return lista;
}
