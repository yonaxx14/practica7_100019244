/* js/script.js */

/* a) Variables y salida */
document.getElementById('btnDatos').addEventListener('click', function () {
    const nombre = 'Geovany Ivan Molina Gómez';
    const matricula = '[100019244]';
    const carrera = 'LSC - UNACH';
    const semestre = '5';
    
    const mensaje = `Nombre: ${nombre} | Matrícula: ${matricula} | Carrera: ${carrera} | Semestre: ${semestre}`;
    document.getElementById('parDatos').textContent = mensaje;
    
    console.log('Datos del alumno mostrados:', nombre, matricula);
});

/* b) Calculadora de calificaciones */
document.getElementById('btnCalc').addEventListener('click', function () {
    const p1 = parseFloat(document.getElementById('p1').value);
    const p2 = parseFloat(document.getElementById('p2').value);
    const p3 = parseFloat(document.getElementById('p3').value);

    if (isNaN(p1) || isNaN(p2) || isNaN(p3)) {
        alert('Por favor ingresa los tres parciales.');
        return;
    }

    const promedio = (p1 + p2 + p3) / 3;
    const parCalc = document.getElementById('parCalc');
    
    console.log('Promedio calculado:', promedio.toFixed(2));

    if (promedio >= 70) {
        parCalc.textContent = `Promedio: ${promedio.toFixed(2)} - Aprobado`;
        parCalc.style.color = '#198754'; 
    } else {
        parCalc.textContent = `Promedio: ${promedio.toFixed(2)} - Reprobado`;
        parCalc.style.color = '#DC3545'; 
    }
});

/* c) Lista dinámica */
document.getElementById('btnAgregar').addEventListener('click', function () {
    const valor = document.getElementById('inputItem').value.trim();
    if (valor === '') return;

    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = valor;
    document.getElementById('milista').appendChild(li);
    document.getElementById('inputItem').value = '';
    
    console.log('Elemento agregado:', valor);
});

document.getElementById('btnLimpiar').addEventListener('click', function () {
    document.getElementById('milista').innerHTML = '';
    console.log('Lista limpiada');
});

/* d) Cambio de estilos */
function cambiarFondo(color) {
    document.getElementById('sec-estilos').style.backgroundColor = '#' + color;
    console.log('Color de fondo cambiado a: #' + color);
}
