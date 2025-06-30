class Singleton {
    private static instance: Singleton;

    private constructor() {
        console.log("Instancia creada");
    }

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    saludar(): void {
        console.log("Hola desde Singleton");
    }
}

// Prueba
const instancia1 = Singleton.getInstance();
const instancia2 = Singleton.getInstance();

console.log("¿Son la misma instancia?", instancia1 === instancia2); // true
instancia1.saludar();
