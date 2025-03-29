export default class Cl_estudiante {
    constructor(nombre, acNotas, cntMaterias) {
        this.nombre = nombre;
        this.acNotas = +acNotas;
        this.cantMaterias = +cntMaterias;
    }

    calcularPromedio() {
        return this.acNotas / this.cantMaterias;
    }
}