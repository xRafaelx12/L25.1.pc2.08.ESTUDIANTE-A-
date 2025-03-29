import Cl_estudiante from "./Cl_estudiante.js";
export default class Cl_becados extends Cl_estudiante {
    constructor(nombre, acNotas, cntMaterias, beca) {
        super(nombre, acNotas, cntMaterias);
        this.beca = beca;
    }

    calcularBeca() {

        if (this.calcularPromedio() > 15) {
            this.beca = 30;
        } else if (this.calcularPromedio() >= 10) {
            this.beca = 20;
        } else {
            this.beca = `NO ES APTO PARA LA BECA `;
        }
        return this.beca;

    }


}