/* Variables Globales */
let total = 0;

/* CONJUNTO DE FUNCIONES PARA CREAR O INICIAR SESION */
function iniciarSesion(){
    let opciones = Number(prompt(`Si desea crear una cuenta escriba 1 \nsi ya tiene una presione 2 \nSi no quiere crearse una presione 3`))

    switch(opciones){
        case 1 : registro(); break;

        case 2: logeo(); break;

        case 3: alert("Bienvenido a Avellena Cajas/Souvenirs"); break;

        default : alert("Opcion Erronea"); break;
    }
}
iniciarSesion();

function registro(user, contra, repcontra, _email){
    alert("Por favor cree su Cuenta de Usuario");

    user = prompt("Ingrese su nombre de usuario");
    contra = prompt("Ingrese contraseña");
    repcontra = prompt("Repita la constrenia");
    if( repcontra != contra){
        alert("Las contrasenias no coinciden");
        alert("Vuelva a escribir la contrasenia");
        repcontra = prompt("Vuelve a ingresar la contrasenia");
    }    
    _email = prompt("Ingrese su email");

    alert(`Bienvenido ${user} a Avellena Cajas/Souvenirs`);
}

function logeo(user, _contra){
    alert("Iniciar sesion")

    user = prompt("Ingrese su nombre de usuario");
    _contra = prompt("Ingrese contraseña");

    alert(`Bienvenido ${user} a Avellena Cajas/Souvenirs`);
}
/*FIN DEL CONJUNTO DE FUNCIONES PARA CREAR O INICIAR SESION */


/* CONJUNTO DE FUNCIONES PARA LA SELECCION DEL PRODUCTO */
function listadoProductos(){
    let cantidad = 0;
    let precio = 0
    let confirmacion = '';
    let tarjeta = 0;
    let listado = Number(prompt('Listado de productos y precios \n1) Cajas de madera - $650 c/u \n2) Cajas de madera personalizadas - $950 c/u \n3) Tazas - $450 c/u \n4) Bolsas - $500 c/u \n5)Estampados remeras - $1200 c/u \n6)Estampados buzos - $2200 c/u \n7)Mousepads - $750 c/u'))

    switch(listado){
        case 1 : alert('Usted elegio Cajas de madera')
                 cantidad = Number(prompt("Cuantas desea llevar?"));
                 precio = 650;
                 total = calcularCostoTotal(precio, cantidad);
                 alert(`Total a pagar: $${total} `);
                 confirmacion = Number(prompt("Desea pagar? 1 = SI & 2 = NO"))
                 if(confirmacion == 1){
                    alert('Ingrese los datos de su tarjeta')
                    tarjeta = Number(prompt())
                    alert('Compra exitosa, su pedida sera enviado dentro de 5 dias habiles')
                 }else{
                    alert(`Muchas gracias por su interes hasta la proxima`)
                 }
                 break;

        case 2 : alert('Usted elegio Cajas de madera personalizadas');
                 cantidad = Number(prompt("Cuantas desea llevar?"));
                 precio = 950;
                 total = calcularCostoTotal(precio, cantidad);
                 alert(`Total a pagar: $${total} `)
                 confirmacion = Number(prompt("Desea pagar? 1 = SI & 2 = NO"))
                 if(confirmacion == 1){
                    alert('Ingrese los datos de su tarjeta')
                    tarjeta = Number(prompt())
                    alert('Compra exitosa, su pedida sera enviado dentro de 5 dias habiles')
                 }else{
                    alert(`Muchas gracias por su interes hasta la proxima`)
                 }
                 break;

        case 3 : alert('Usted elegio Tazas');
                 cantidad = Number(prompt("Cuantas desea llevar?"));
                 precio = 450;
                 total = calcularCostoTotal(precio, cantidad);
                 alert(`Total a pagar: $${total} `)
                 confirmacion = Number(prompt("Desea pagar? 1 = SI & 2 = NO"))
                 if(confirmacion == 1){
                    alert('Ingrese los datos de su tarjeta')
                    tarjeta = Number(prompt())
                    alert('Compra exitosa, su pedida sera enviado dentro de 5 dias habiles')
                 }else{
                    alert(`Muchas gracias por su interes hasta la proxima`)
                 }
                 break;

        case 4 : alert('Usted elegio Bolsas');
                 cantidad = Number(prompt("Cuantas desea llevar?"));
                 precio = 500;
                 total = calcularCostoTotal(precio, cantidad);
                 alert(`Total a pagar: $${total} `)
                 confirmacion = Number(prompt("Desea pagar? 1 = SI & 2 = NO"))
                 if(confirmacion == 1){
                    alert('Ingrese los datos de su tarjeta')
                    tarjeta = Number(prompt())
                    alert('Compra exitosa, su pedida sera enviado dentro de 5 dias habiles')
                 }else{
                    alert(`Muchas gracias por su interes hasta la proxima`)
                 }
                 break;

        case 5 : alert('Usted elegio Estampados remeras');
                 cantidad = Number(prompt("Cuantas desea llevar?"));
                 precio = 1200;
                 total = calcularCostoTotal(precio, cantidad);
                 alert(`Total a pagar: $${total} `)
                 confirmacion = Number(prompt("Desea pagar? 1 = SI & 2 = NO"))
                 if(confirmacion == 1){
                    alert('Ingrese los datos de su tarjeta')
                    tarjeta = Number(prompt())
                    alert('Compra exitosa, su pedida sera enviado dentro de 5 dias habiles')
                 }else{
                    alert(`Muchas gracias por su interes hasta la proxima`)
                 }
                 break;

        case 6 : alert('Usted elegio Estampados buzos');
                 cantidad = Number(prompt("Cuantas desea llevar?"));
                 precio = 2200;
                 total = calcularCostoTotal(precio, cantidad);
                 alert(`Total a pagar: $${total} `)
                 confirmacion = Number(prompt("Desea pagar? 1 = SI & 2 = NO"))
                 if(confirmacion == 1){
                    alert('Ingrese los datos de su tarjeta')
                    tarjeta = Number(prompt())
                    alert('Compra exitosa, su pedida sera enviado dentro de 5 dias habiles')
                 }else{
                    alert(`Muchas gracias por su interes hasta la proxima`)
                 }
                 break;

        case 7 : alert('Usted elegio Mousepads');
                 cantidad = Number(prompt("Cuantas desea llevar?"));
                 precio = 750;
                 total = calcularCostoTotal(precio, cantidad);
                 alert(`Total a pagar: $${total} `)
                 confirmacion = Number(prompt("Desea pagar? 1 = SI & 2 = NO"))
                 if(confirmacion == 1){
                    alert('Ingrese los datos de su tarjeta')
                    tarjeta = Number(prompt())
                    alert('Compra exitosa, su pedida sera enviado dentro de 5 dias habiles')
                 }else{
                    alert(`Muchas gracias por su interes hasta la proxima`)
                 }
                 break;
        
        default : alert("Opcion Erronea"); break;

    }
    
}
listadoProductos();

function calcularCostoTotal(precio, cantidad){
    total = precio * cantidad
    return total;
}

/* FIN CONJUNTO DE FUNCIONES PARA LA SELECCION DEL PRODUCTO */