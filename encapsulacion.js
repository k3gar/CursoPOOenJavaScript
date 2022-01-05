//Encapsulación usando Getters and Setters

class Course {
    constructor({
        name,
        time,
        clases, 
        teacher
    }){
        this._name = name;
        this.time = time;
        this.clases = clases;
        this.teacher = teacher
    }

    get name(){
        return `El nombre del curso es "${this._name}"`;
    }

    //Cambiando el nombre a través de un método
    /* changeName(nuevoNombrecito){
        this._name = nuevoNombrecito
    } */
    set name(nuevoNombrecito){
        if(nuevoNombrecito === "Curso Malito de Programación Básica"){
            console.warn('Web... No')
        }else{
            this._name = nuevoNombrecito;
        }
    }
}
const course1 = new Course({
    name: 'Curso Básico de Programación Orientada a Objetos con JavaScript',
    time: '4 horas',
    clases: 17,
    teacher: 'Juan David Castro'
})
const course2 = new Course({
    name: 'Curso de Análisis de Negocios para Ciencia de Datos',
    time: '2 horas',
    clases: 23,
    teacher: 'Sílvia Ariza Sentís'
})

course1.name;
//'Curso Básico de Programación Orientada a Objetos con JavaScript'
//Cambio como método 👇
//course1.changeName('Camio de nombre de cursos');

//Para hacer la asignación con el set, solo lo realizamos con el símbolo de asignación "="


class RutaAprendizaje{
    constructor({
        name,
        cursos = []
    }){
        this.name = name;
        this.cursos = cursos;
    }
}

const ruta1 = new RutaAprendizaje({name: 'Escuela JavaScript', cursos : [course1]})
const ruta2 = new RutaAprendizaje({name: 'Escuela Data Science', cursos : [course2]})

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const escuelaDesarrolloWeb = [
    'Curso Definitivo de HTML y CSS',
    'Curso Práctivo de HTML y CSS',
    'Curso de Responsive Design'
]

const juan2 = new Student({
    name: 'JuanDC',
    username: 'juandc',
    email: 'juanito@juanito.com',
    twitter: 'fjuandc',
})
const miguelito = new Student({
    name: 'miguelito',
    username: 'miguelitofeliz',
    email: 'miguelito@juanito.com',
    twitter: 'miguelito_feliz',
    learningPaths: [ruta1, ruta2]
})