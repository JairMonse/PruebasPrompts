class Singleton {
    private static instance: Singleton;
    private timestamp: number;

    private constructor() {
        this.timestamp = Date.now();
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public getTimestamp(): number {
        return this.timestamp;
    }
}

// Prueba del Singleton
const instance1 = Singleton.getInstance();
console.log("Instancia 1 creada en:", instance1.getTimestamp());

setTimeout(() => {
    const instance2 = Singleton.getInstance();
    console.log("Instancia 2 creada en:", instance2.getTimestamp());
    console.log("¿Son la misma instancia?", instance1 === instance2);
}, 1000);