// Clase Producto

class Producto{  //esta clase representa un producto con un nombre(nombre) y un precio(precio).
    constructor(nombre, precio ){
        this.nombre = nombre;
        this.precio = precio;
}
}


//clase Carrito

class  Carrito{   //esta clase representa un carrito de compras. Tiene las siguientes propiedades y métodos:
    constructor(){
        this.productos = [];
    }

    agregarProducto(producto, cantidad){   //agrega un producto al carrito con una cantidad específica
        this.productos.push({producto, cantidad});
    }

    calculartotal(){   //calcula el coste total de los productos en el carrito
        let total = 0;
        this.productos.forEach(producto => {
            total += producto.precio * producto.cantidad;
    });
    return total;
    }

    mostrarDetalleCompra() {  // muestra los detalles de los productos en el carrito
        alert('Detalle de la Compra: ');
        this.productos.forEach((item, index) => {
            alert(
            `${index +1}. ${item.producto.nombre} x ${item.cantidad} -$${(
                item.producto.precio * item.cantidad
             ).toFixed(2)}`
            );
        });
    }

}

//Productos disponibles

const productosDisponibles =[   //Se define una matriz que contiene cinco Productos, objetos con diferentes nombres y precios
    new Producto('Leche', 1000),
    new Producto('Pan de Molde',2000),
    new Producto('Queso', 1200),
    new Producto('Mermelada', 890),
    new Producto('Azucar', 1300),
];

// fc del usuario   Las siguientes funciones interactúan con el usuario

function mostrarProductos(){  // muestra una lista de productos disponibles
    alert(
        'Productos Disponibles: \n1-Leche $1000\n2.- Pan de Molde $2000 \n3.- Queso $1200\n4.- Mermelada $890\n5.- Azúcar $1300'
    );

}

function agregarAlCarrito(carrito, indexProducto, cantidad){   // agrega un producto al carrito según la entrada del usuario
    const productoSeleccionado= productosDisponibles[indexProducto - 1];

    if(!productoSeleccionado){
        alert('Producto no disponible,  por favor selecciona otro');
        return;
    }

    carrito.agregarProducto(productoSeleccionado, cantidad);
    alert (`${cantidad} ${productoSeleccionado.nombre} (s) agregado (s) al carrito`);
}

function finalizarCompra(carrito){   // finaliza la compra y muestra el coste total
    carrito.mostrarDetalleCompra();
    const total = carrito.calculartotal();
    alert(`Compra finalizada Total: $ ${total}`);
}


// iteración  sobre el carrito

const  carritoUsuario = new Carrito();
    while(true){
        mostrarProductos();   //El programa principal crea un nuevo Carritoobjeto y entra en un bucle infinito, donde el usuario puede ver y seleccionar productos

        const indexProducto= parseInt(prompt('Ingresa el número del producto que deseas agregar al carrito'));
        const cantidad = parseInt(prompt('Ingresa la cantidad que deseas comprar'));
    
//validaciones
        if(isNaN(indexProducto) || indexProducto<1 || indexProducto>productosDisponibles.length || isNaN(cantidad) || cantidad <=0){
            alert('Entrada no válida. Ingresar número válidos');
            continue;
        }

        agregarAlCarrito(carritoUsuario, indexProducto, cantidad);

        const continuar = prompt('¿Deseas seguir agregando productos? (s/n').toLocaleLowerCase();
        if(continuar !== 's'){
            break;
    }
}


// llamada de finalizar Compra

finalizarCompra(carritoUsuario);