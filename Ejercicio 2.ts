class Alumno {
    nombre
    constructor(nombre) {
      this.nombre = nombre;
    }
  }
class Curso{
    Matematica = [""]
    Lengua = [""]
    Ciencias = [""]
    nombre
    alumnos
    constructor(nombre) {
        this.nombre = nombre;
        this.alumnos = [];
      }
    asignarAlumno(alumno) {
        this.alumnos.push(alumno);

    }
}
const alumno1 = new Alumno("Federico");
const alumno2 = new Alumno("Lucas");
const curso1 = new Curso("Matemática");
const curso2 = new Curso("Lengua");
curso2.asignarAlumno(alumno1);
curso1.asignarAlumno(alumno2);
