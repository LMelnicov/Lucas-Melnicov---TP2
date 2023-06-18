class CuentaBancaria {
    fondos
    constructor() {
      this.fondos = 0;
    }
  
    asignarFondos(cantidad) {
      if (cantidad > 500000) {
        console.log("¡Alarma! Se ha asignado más de 500000 fondos.");
      }
      this.fondos += cantidad;
    }
  
    sacarFondos(cantidad) {
      if (cantidad > this.fondos) {
        console.log("¡Alarma! No hay suficientes fondos para realizar la operación.");
      } else if (cantidad > 100000) {
        console.log("¡Alarma! Se ha intentado sacar más de 100000 fondos.");
      } else {
        this.fondos -= cantidad;
      }
    }
  }
  
  const cuenta = new CuentaBancaria();

  cuenta.asignarFondos(200000);
  cuenta.asignarFondos(700000);  
  cuenta.sacarFondos(150000);  
  cuenta.sacarFondos(80000);
  
  console.log("Saldo actual:", cuenta.fondos);
  