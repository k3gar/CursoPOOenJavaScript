//OBJETOS LITERALES -- No es escalable a la hora de actualizar datos
//Que podrían ser compartidos entre los demás objetos.
/* const juan1 = {
   nombre: 'JuanDC',
    username: 'juandc',
    points: 100,
    socialMedia: {
        twitter: 'fjuandc',
        instagram: 'fjuandc',
        facebook: undefined,
    },
    approvedCourses: [
        'Curso Definitivo de HTML y CSS',
        'Curso Práctivo de HTML y CSS',
    ],
    learningPaths: [
        {
            name: 'Escuela de Desarrollo Web',
            courses: [
                'Curso Definitivo de HTML y CSS',
                'Curso Práctivo de HTML y CSS',
                'Curso de Responsive Design'
            ]
        },
        {
            name: 'Escuela de Videojuegos',
            courses: [
                'Curso Introducción a la Producción de Vgs',
                'Curso de Unreal Engine',
                'Curso de Unity 3D'
            ]
        },
    ]
};

const miguelito1 = {
    nombre: 'Miguelito',
    username: 'miguelitofeliz',
    points: 1000,
    socialMedia: {
        twitter: 'miguelitofeliz',
        instagram: 'miguelito_feliz',
        facebook: undefined,
    },
    approvedCourses: [
        'Curso DataBusiness',
        'Curso DataViz',
    ],
    learningPaths: [
        {
            name: 'Escuela de Desarrollo Web',
            courses: [
                'Curso Definitivo de HTML y CSS',
                'Curso Práctivo de HTML y CSS',
                'Curso de Responsive Design'
            ]
        },
        {
            name: 'Escuela de Data Science',
            courses: [
                'Curso DataBusiness',
                'Curso DataViz',
                'Curso Tableau'
            ]
        },
    ]
}; */

//OBJETOS COMO CLASES
class Course {
    constructor({
        name,
        time,
        clases,
        teacher
    }){
        this.name = name;
        this.time = time;
        this.clases = clases;
        this.teacher = teacher
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