class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}

// Prueba
const s1 = new Singleton();
const s2 = new Singleton();
console.log("¿s1 y s2 son la misma instancia?", s1 === s2);