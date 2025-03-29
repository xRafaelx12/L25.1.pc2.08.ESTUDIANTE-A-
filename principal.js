import Cl_Becados from "./Cl_Becados.js";
import Cl_estudiante from "./Cl_estudiante.js";

let student1 = new Cl_Becados("Mary", 132, 8);
let student2 = new Cl_Becados("Alirio", 315, 35);


let salida = document.getElementById("salida");
salida.innerHTML = `REPORTE:<br>
<br> Nombre del studentiante: ${student1.nombre}
<br> Acumulado de notas: ${student1.acNotas}
<br> Cantidad de materias: ${student1.cantMaterias}
<br> Nota promedio: ${student1.calcularPromedio().toFixed(2)}
<br> ${student1.nombre} el estudiante rebice un  beca de:${student1.calcularBeca()}
<br>
<br> Nombre del studentiante: ${student2.nombre}
<br> Acumulado de notas: ${student2.acNotas}
<br> Cantidad de materias: ${student2.cantMaterias}
<br> Nota promedio: ${student2.calcularPromedio().toFixed(2)}
<br> ${student2.nombre} el estudiante rebice un  beca de:${student2.calcularBeca()}`;