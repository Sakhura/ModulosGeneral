var tareas = [
    { tarea : "Pintar la casa" },
    { tarea : "Comprar pan" },
    { tarea : "pasear a los pixixos" },
]
tabla(tareas)

function tabla(tareas){
    var cuerpoTabla = document.getElementById("cuerpoTabla");
    cuerpoTabla.innerHTML = "";
    for (let i = 0; i < tareas.length; i++){
        cuerpoTabla.innerHTML += `<tr>
        <td>${tareas[i].tarea}</td>
        <td><button type="button" class="btn btn-danger" onclick="eliminar"(${i})>Finalizar</button></td>
        </tr>`
    }
}


function mostrarTareas(){
    var cuerpoTabla = document.getElementById("cuerpoTabla");
    cuerpoTabla.innerHTML = "";
    for (let i = 0; i < tareas.length; i++){
        cuerpoTabla.innerHTML += `<tr>
        <td>${tareas[i].tarea}</td>
        <td><button type="button" class="btn btn-danger" onclick="eliminar"(${i})>Finalizar</button></td>
        </tr>`
    }
}


function eliminar(indice){
    tareas.splice(indice, 1);
    tabla(tareas);
}


function mostrarFormulario(){
    let formulario = document.getElementById("formulario");
    if (formulario.style.display === "none" || formulario.style.display === ""){
        formulario.style.display = "block";
    }else{
        formulario.style.display = "none";
    }
}

function agregarTarea(){
    var nuevaTarea = document.getElementById("nuevaTarea").value;
    tareas.push({ tarea : nuevaTarea});
    tabla(tareas);
    document.getElementById("formulario").style.display = "none";
    document.getElementById("nuevaTarea").value = "";

}