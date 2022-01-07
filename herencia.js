function videoPlay(id){
    const urlSecreta = "https://secreto.com/" + id
    console.log('S está reproduciendo desde ' + urlSecreta)
}
function videoStop(id){
    const urlSecreta = "https://secreto.com/" + id
    console.log('Se pausó ' + urlSecreta)
}
function ejemplo(){
    console.log("AHHHHHHHHHHHHHHHH .... Ejemplo")
}

class PlatziClass {
    constructor({
        name, videoID, 
    }){
        this.name = name;
        this.videoID = videoID;
    }
    reproducir(){
        videoPlay(this.videoID)
    }
    pausar() {
        videoStop(this.videoID)
    }
    ejemplo(){
        ejemplo()
    }
}



class Course {
    constructor({
        name,
        time,
        clases, 
        teacher,
        isFree = false,
        lang = "spanish"
    }){
        this._name = name;
        this.time = time;
        this.clases = clases;
        this.teacher = teacher;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return `El nombre del curso es "${this._name}"`;
    }

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
    teacher: 'Juan David Castro',
    isFree: true
})
const course2 = new Course({
    name: 'Curso de Análisis de Negocios para Ciencia de Datos',
    time: '2 horas',
    clases: 23,
    teacher: 'Sílvia Ariza Sentís',
    lang: "english"
})


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


class FreeStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse) {
        if(newCourse.isFree){
           this.approvedCourses.push(newCourse) 
        }else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos")
        }

    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse) {
        if(newCourse.lang !== "english"){
           this.approvedCourses.push(newCourse) 
        }else {
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en ingles")
        }

    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse) 
    }
}




const escuelaDesarrolloWeb = [
    'Curso Definitivo de HTML y CSS',
    'Curso Práctivo de HTML y CSS',
    'Curso de Responsive Design'
]

const juan2 = new FreeStudent({
    name: 'JuanDC',
    username: 'juandc',
    email: 'juanito@juanito.com',
    twitter: 'fjuandc',
})
const miguelito = new BasicStudent({
    name: 'miguelito',
    username: 'miguelitofeliz',
    email: 'miguelito@juanito.com',
    twitter: 'miguelito_feliz',
    learningPaths: [ruta1, ruta2]
})