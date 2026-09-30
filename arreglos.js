let edadesIzquierda = [12, 15]; 
let edadesDerecha = [20, 25];

function agregarEdad() {
    let inputEdad = document.getElementById("edad").value;
    let edad = parseInt(inputEdad);
    
    if (!isNaN(edad)) {
        edadesIzquierda.push(edad);
        document.getElementById("edad").value = ""; 
    }
    
    pintarArregloIzquierda();
}

function pintarArregloIzquierda() {
    let tbody = document.getElementById("tablaIzquierda");
    tbody.innerHTML = "";
    
    for (let i = 0; i < edadesIzquierda.length; i++) {
        let edad = edadesIzquierda[i];
        tbody.innerHTML += `
            <tr>
                <td>${edad}</td>
                <td>
                    <button class="btn-eliminar" onclick="eliminarIzquierdo(${i})">Eliminar</button>
                </td>
                <td>
                    <button class="btn-mover" onclick="moverHaciaDerecha(${i})">➜</button>
                </td>
            </tr>
        `;
    }
}

function eliminarIzquierdo(indice) {
    edadesIzquierda.splice(indice, 1);
    pintarArregloIzquierda();
}

function pintarArregloDerecha() {
    let tbody = document.getElementById("tablaDerecha");
    tbody.innerHTML = "";
    
    for (let i = 0; i < edadesDerecha.length; i++) {
        let edad = edadesDerecha[i];
        
        tbody.innerHTML += `
            <tr>
                <td>
                    <button class="btn-mover" onclick="moverHaciaIzquierda(${i})">⬅</button>
                </td>
                <td>${edad}</td>
                <td>
                    <button class="btn-eliminar" onclick="eliminarDerecho(${i})">Eliminar</button>
                </td>
            </tr>
        `;
    }
}

function eliminarDerecho(indice) {
    edadesDerecha.splice(indice, 1);
    pintarArregloDerecha();
}

function moverHaciaDerecha(indice) {
    let edad = edadesIzquierda[indice];
    edadesDerecha.push(edad); 
    edadesIzquierda.splice(indice, 1); 
    pintarArregloIzquierda();
    pintarArregloDerecha();
}

function moverHaciaIzquierda(indice) {
    let edad = edadesDerecha[indice];
    edadesIzquierda.push(edad); 
    edadesDerecha.splice(indice, 1); 

    pintarArregloIzquierda();
    pintarArregloDerecha();
}

document.querySelector(".formulario button").addEventListener("click", agregarEdad);

pintarArregloIzquierda();
pintarArregloDerecha();