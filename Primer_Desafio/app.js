let alumnos = 1;
let notas = 3;
let promedio = 0;
let calificacion = 0;
let total = 0;


for( let i = 0; i < alumnos; i++){
    
    let nombre = prompt(`Ingrese el nombre del Alumno: ${i}`);
    let apellido = prompt(`Ingrese el apellido del Almuno: ${i}`);

    console.log(`\t\t Alumno: ${nombre}` + " " + `\n\t\t Apellido: ${apellido}`)

    for( let j = 0; j < notas; j++){
        calificacion = Number(prompt(`Ingrese la calificacion del alumno: ${nombre} ${j}`));
        

        console.log(`\t\tSus calificaciones: ${calificacion}\n`)

        total = total + calificacion
        promedio = total/notas;

        
    }
    
    console.log(`Su promedio es: ${promedio}`)
    console.log('\n\n')
    if( promedio >= 6){
        alert(`El alumno ${nombre} esta aprobado`)
    }else{
        alert(`El alumno${nombre} no esta aprobado`)
    }
}