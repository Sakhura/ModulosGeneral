//arrays o arreglos

var personas=["Sabina","Patricio", 'Pablo'];
var paises =["Chile", "Argentina", "Paraguay"];
var frutas=["uva", "manzana", "pera", "kiwi"];

console.log(personas);
console.log(paises);
console.log(frutas);

var manzana = new Object();
manzana.color = "rojo";
manzana.sabor = "dulce";
manzana.precio = 1000;
console.log(manzana);

var auto = new Object();
auto.marca = "Toyota";
auto.modelo = "Corolla";
auto.color = "azul";
console.log(auto);

auto.acelerar = function(){
    console.log("El auto está acelerando");
}

auto.frenar = function(){
    console.log("El auto está frenando");
    }

auto.acelerar();
auto.frenar();

//funcion constructora nombre, metodos y propiedades

function Auto (numeroPuertas, marca, color){
    this.numeroPuertas = numeroPuertas;
    this.marca = marca;
    this.color = color;
}

var AutoAntonio = new Auto (4,"Kia","Plata");
var AutoJuan = new Auto (4,"Toyota","Azul");
var AutoMaria = new Auto (2,"Fiat","Rojo");
console.log(AutoAntonio);