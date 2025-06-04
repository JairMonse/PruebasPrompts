class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}

// Prueba
const a = new Singleton();
const b = new Singleton();
console.log("¿Es la misma instancia?", a === b);
