/*funcion para ejercicio undividual 7 modulo 3*/
function validacion(){
    valor = document.getElementById("usuarioform").value;
    valor2= document.getElementById("passwordform").value;
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
    alert("[Error] debe rellenar el campo")  
    return false;
    }
    else if (valor!="admin"){
        alert("[Error] No se reconoce Usuario")
        return false;
    }
    else if (valor2 == null || valor2.length==0 || /^\s+$/.test(valor2)){
        alert("[Error] Campo de clave Vacío")
        return false;
    }
    else if (valor2!="1234"){
        alert("[Error] Clave Incorrecta")
        return false;
    }
    return true;
}
/*funcion para ejercicio undividual 8 modulo 3*/
function validacion2(){
    valor= document.getElementById("Nombre").value;
    valor2= document.getElementById("Apellidos").value;
    valor3=document.getElementById("Direccion").value;
    valor4=document.getElementById("Telefono").value;

if(valor == null || valor.length == 0 || /^\s+$/.test(valor))  {
    document.getElementById("Nombre").style.backgroundColor='red'
    document.getElementById("Nombre").style.borderColor='red'
    alert("[Error] campo Nombre Vacio")
    return false;
}
else if (valor.length>50){
    document.getElementById("Nombre").style.backgroundColor='red'
    document.getElementById("Nombre").style.borderColor='red'
    alert("[Error] Maximo 50 caracteres en Nombres")
    return false;    
}  
else if (valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2)){
    document.getElementById("Apellidos").style.backgroundColor='red'
    document.getElementById("Apellidos").style.borderColor='red'
    alert("[Error] Campo Apellidos vacio")
    return false;
}
else if (valor2.length>50){
    document.getElementById("Apellidos").style.backgroundColor='red'
    document.getElementById("Apellidos").style.borderColor='red'
    alert("[Error] Maximo 50 caracteres en Apellidos")
    return false;
}
else if(valor3 == null || valor3.length == 0 || /^\s+$/.test(valor3)){
    document.getElementById("Direccion").style.backgroundColor='red'
    document.getElementById("Direccion").style.borderColor='red'
    alert("[Error] Campo de Direccion Vacio")
    return false;
}
else if(valor3.length>70){
    alert("[Error] Maximo 70 caracteres en Direccion")
    document.getElementById("Direccion").style.backgroundColor='red'
    document.getElementById("Direccion").style.borderColor='red'
    return false;
}
else if ( /^\+\d{2,3}\s\d{9}$/.test(valor4))  {
    alert("Ingrese un Telefono con +56...")
    return false;
}
alert("Cliente Ingresado")
return true;
}
/*funcion para ejercicio undividual 9 modulo 3*/
function valventa(){
    var errores = "";
    var id=document.getElementById("txtid").value;
    var vendedor=document.getElementById("nomvend").value;
    var cantidad=document.getElementById("cantart").value;

    if (id == null || vendedor == null || cantidad == null || id.length == 0 
    || vendedor.length == 0 || cantidad.length == 0){
        errores += "Alguno de los campos no tiene datos<br/>";
        
    }

    if (isNaN(id)){
        errores += "El Id no es un Numero <br/>";
    }else{
        var idnum = parseInt(id);
    if( idnum <= 0 || idnum > 1000 ) {
       errores += "El identificador no esta dentro del rango esperado<br/>";
        }
    }
    if ( vendedor.length > 50){
        errores += "El nombre del Vendedor tiene mas de 50 caracteres<br/>";
        }
    if(isNaN(cantidad)){
        errores += "La cantidad no es un numero<br/>";

    }else{
        var cantidadnum = parseInt(cantidad);
    if (cantidadnum <= 0 || cantidadnum > 1000){
         errores += "La cantidad de Articulosno no esta dentro del rango<br/<";
        }
    }
    if(errores == null || errores == "" || errores.length == 0){
        errores = "Validado";
    }
    
    var divmensaje = document.getElementById("mensaje");
    divmensaje.innerHTML = errores;



}
/*funcion para ejercicio undividual 10 modulo 3*/
function confirmareliminacion(){
    var txt;
  if (confirm("¿Esta seguro de eliminar?")) {
    txt = "Eliminado";
    
  } else {
    txt = "Has cancelado la eliminacion";
    
  }
  alert(txt);
}
/* funcion jquery ejercicio ind 13 modulo 3*/
$(document).ready(
    function(){

        $(section).mouseenter(
            function(){
                $(this).hide(2000);
            }
        );

        $("#despliega").click(
            function(){
                $(section).fadeIn(1000);
            }
        );

    }
);