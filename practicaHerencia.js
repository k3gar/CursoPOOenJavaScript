class Animal {
    constructor ({especie, name, habitat}){
        this.especie = especie;
        this.name = name;
        this.habitat = habitat;
    }
}

class Extinto extends Animal{
    constructor(props){
        super(props);
        console.log(`Lo siento, ${this.name} está extinto`)
    }

    hablar(){
        console.log('Me mori wee')
    }

    presentarse(){
        console.log(`Saludos viajero del tiempo. Soy un ${this.name}. Formé parte de la especie ${this.especie} y mi hábitat era ${this.habitat}`)
    }
}

const mamut = new Extinto({
    name: 'Mamut',
    especie: "Mammuthus primigenius",
    habitat: 'bosques de piceas'

})

