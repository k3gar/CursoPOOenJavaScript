const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    }
};

//Hacer que natalia apruebe otro curso.
natalia.cursosAprobados.push("Curso de Responsive Design")

natalia.aprobarCurso("Curso de POO")

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
/*     this.aprobarCurso = function (nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    }
 */
}
Student.prototype.aprobarCurso = function (nuevoCursito){
    this.cursosAprobados.push(nuevoCursito)
}

const juanita = new Student('Juanita', 18, ["Curso de Responsive Design", "Curso de Creación de Personajes"])

//Prototipos Con la Sintaxis de Clases

/* class Student2 {
    constructor(name, age, cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    }
}

const miguelito = new Student2("Miguel", 15, ["Curso de Responsive Design"])
 */
class Student2 {
    constructor({
        name,
        cursosAprobados = [],
        age,
        }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    }
}

const miguelito = new Student2({
    name: "Miguel", 
    age: 15,
    cursosAprobados: ["Curso de Responsive Design"]})
