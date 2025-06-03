const estudiantes = [
    {
        id: 1, 
        nombre: "Lara", 
        edad: 16    
    }, 
    {
        id: 2, 
        nombre: "Tomas", 
        edad: 15 
    }, 
    {
        id: 3, 
        nombre: "Pedro", 
        edad: 17 
    }
]


const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 16);
console.log(estudiantesMayores);


const estudianteEncontrado = estudiantes.find(estudiante => estudiante.id === 2);
console.log(estudianteEncontrado);

estudiantes.forEach(estudiante => {
    if(estudiante.nombre === 'Lara'){
        estudiante.edad = 18;
    }
})
console.log(estudiantes);


const nuevoEstudiante = {id: 4, nombre: 'Martina', edad: 15};
estudiantes.push(nuevoEstudiante)


const estudianteEliminado = estudiantes.filter(estudiante => estudiante.id !== 1)
console.log(estudianteEliminado);


const estudiantesOrdenados = estudiantes.sort((a, b) => a.edad - b.edad)
console.log(estudiantesOrdenados);


