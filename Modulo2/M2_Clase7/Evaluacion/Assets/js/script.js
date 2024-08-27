var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del servicio al cliente de Clavistel.\n Estoy aqui para ayudarte en lo que necesitas. Escribe el número de la opción que buscas: \1.-Boletas y Pagos. \n2.Señal y llamadas. \n3.Oferta comercial \n4. Otras consultas")

switch (opcion) {
    case "1":
        boletasPagos();
        break;
    case "2":
        señalLlamadas();
        break;
    case "3":
        ofertaComercial();
        break;
    case "4":
        otrasConsultas();
        break;
    default:
        alert("Opción no válida. Por favor, elige una de las opciones disponibles");
        break;
}

//FUNCIONES

function boletasPagos() {
    let option = prompt("Seleccione una opciíon \n1. Ver Boleta  \n2. Pagar Cuenta");
    if (option == 1) {
        alert("Haga clic aquí para descargar su boleta")
    } else if (option == 2) {
        alert("Ud esta siendo transferido espere por favor...")
    } else {
        alert("Opción no válida")
    }
}

function señalLlamadas() {
    let option = prompt("Seleccione una opciíon \n1. Ver señal \n2. Problemas con las llamadas")
    if (option == 1 || option == 2) {
        let problema = prompt("A continuacion escriba su solicitud");
        alert("Estimado usuariom su solicitud: '" + problema + "' Ha sido ingresada con exito. Pronto será contactado por uno de nuestros ejecutivos");
    } else {
        alert("Opción no válida")
    }
}

function ofertaComercial(){
    let oferta = prompt("¡Clavistel tiene una oferta comercial acorde a tus necesidades! \nPara conocer más información y ser asesorado personalmente po uno de nuestros ejecutivos escribe 'Si' y un ejecutivo te llamara. De lo contrario ingrese 'NO'");
        if(oferta == 'Si'){
            alert("Un ejecutivo se comunicará con usted en breve para brindarle la información")
}else {
    alert("Muchas gracias por su tiempo")
}
}

function senalLlamadas(){
    let option = prompt("Seleccione una opción \n1.- Problemas con la señal  \n2.- Problemas con las llamadas");
    if (option == 1 || option == 2){
        let problema = prompt("A continuación escriba su solicitud");
        alert("Estimado usuario, su solicitud: '" + problema + "' Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.");
    }else{
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios.")
    }
}

function ofertaComercial(){
    let oferta = prompt("¡Mentel tiene una oferta comercial acorde a tus necesidades! \nPara conocer más información y ser asesorado personalmente por un ejecutivo escribe 'SI' y un ejecutivo te llamará. De lo contrario ingrese 'NO'");
    if(oferta == "SI"){
        alert("Un ejecutivo contactará con usted")
    }
    else if (oferta == "NO"){
        alert("Gracias por preferir nuestros servicios")
    }else{
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios")
    }
}

function otros(){
    let consulta = prompt("A continuación escriba su consulta");
    alert("Estimado usuario, su consulta: '" + consulta + "' Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.");
}

function defecto(){
    alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios");
}