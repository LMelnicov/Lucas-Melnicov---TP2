class Auto {
    // atributo
    _marca
    _modelo
    _color
    _max_velocidad
    constructor(marca,modelo,color,max_velocidad) {
        this._marca = marca;
        this._modelo = modelo;
        this._color = color;
        this._max_velocidad = max_velocidad;
    }
    // metodo
    arrancar() {
        return `Arrancando auto ${this._marca}`;
    }
    calcular_tiempo() {
        let distancia = Number(prompt("Coloque los kilometros a recorrer:"))
        let velocidad = Number(prompt("Coloque la velocidad a la que ira:"))
        let tiempo = distancia / velocidad 
        return tiempo
    }
};
var autos = [{}];
const a1 = new Auto("Peugeot","206","Gris",180)
const a2 = new Auto("Ford","Focus","Azul",200);
const a3 = new Auto("Chevrolet","Captiva","Rojo",220);
const a4 = new Auto("Ford","Fiesta","Blanco",180);
const a5 = new Auto("Peugeot","308","Negro",200);
autos.push(a1,a2,a3,a4,a5);
console.info(a1.arrancar());
console.log(autos)