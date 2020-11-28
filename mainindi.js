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

