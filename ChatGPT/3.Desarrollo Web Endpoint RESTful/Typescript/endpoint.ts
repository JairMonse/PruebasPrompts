class Singleton {
  private static instance: Singleton;

  private constructor() {
    console.log("Instancia creada");
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public sayHello(): void {
    console.log("Hola desde Singleton");
  }
}

// Prueba del Singleton
const instancia1 = Singleton.getInstance();
const instancia2 = Singleton.getInstance();

console.log("¿Ambas instancias son iguales?", instancia1 === instancia2); // true
instancia1.sayHello();
