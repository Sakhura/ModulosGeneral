var edad1 = parseInt (prompt("Ingrese su Edad"));
var edad2 = parseInt (prompt("Ingrese la edad de su amigo"));

if(edad1>edad2){
    alert(edad1 + "Usted es mayor que su amigo" + edad2);
} else if(edad1 == edad2){
    alert("Usted y su amigo tienen la misma edad");
}else{  
    alert("Su amigo es mayor que usted, su amigo tiene " +edad2 + " años y ud solo tiene " +edad1);
}

