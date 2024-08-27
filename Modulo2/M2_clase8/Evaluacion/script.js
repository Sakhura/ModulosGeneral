//funcion contructora
function Persona(nombre, rut, clave, saldo) {
    this.nombre = nombre;
    this.rut = rut;
    this.clave = clave;
    this.saldo = saldo;
}

// 3 usuarios que ingresen //3 objetos con los cuales se ingresa al menú
var persona1 = new Persona("Juan", "12345678-9", 1234, 154000);
var persona2 = new Persona("Sabina", "14523416-8", 5678, 34000);
var persona3 = new Persona("Juanito", "98765432-1", 9012, 23000);

//lista objetos
var lista = [persona1, persona2, persona3];

alert("Bienvanido a Banca en línea");
var rut = prompt("ingrese su rut con guion");
var clave = prompt("ingrese su clave de acceso");

alert("procesando...");

var boolean = false;
for (let i = 0; i < lista.length; i++) {
    if (lista[i].rut == rut && lista[i].clave == clave) {
        boolean = true;
    } else {
        boolean = false;
    }
    if (boolean == true) {
        alert("Bienvenido " + lista[i].nombre);
        menu(lista[i]);
    }
}

if (boolean == false) {
    alert("rut o clave incorrectos");
}

function menu(usuario) {
    do {
        var opcion = parseInt(prompt("Seleccione que desea hacer: \n1 Ver Saldo \n2 Realizar Giro \n3 Realiza Deposito \n4 Salir"));
        switch (opcion) {
            case 1:
                alert("Su saldo actual es: " + usuario.saldo);
                break;
            case 2:
                var giro = parseInt(prompt("Su saldo actual es: " + usuario.saldo + " \nIngrese el monto que desea girar"));

                if (giro > usuario.saldo) {
                    alert("No tiene saldo suficiente");
                } else {
                    usuario.saldo = usuario.saldo - giro;
                    usuario.nuevoSaldo;
                    alert("giro realizado, Su nuevo saldo es de " + usuario.saldo);
                }
                break;

            case 3:
                var deposito = parseInt(prompt("Su salfo actual es " + usuario.saldo + "Ingrese el monto que desea depositar "));
                usuario.saldo = usuario.saldo + deposito;
                alert("deposito realizado, Su nuevo saldo es de " + usuario.saldo);
                break;

            case 4:


                alert("gracias por utilizar Banaca en línea");
                exits();
                break;

            default:
                alert("Opción no válida");
                break;
        }
    } while (opcion != 4);
}