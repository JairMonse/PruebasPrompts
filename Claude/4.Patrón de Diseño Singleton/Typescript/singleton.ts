class MySingleton {
    private static instance: MySingleton | null = null;
    private data: string;

    // Constructor privado para evitar instanciación directa
    private constructor() {
        this.data = "Instancia Singleton";
    }

    // Método estático para acceder a la única instancia
    public static getInstance(): MySingleton {
        if (this.instance === null) {
            this.instance = new MySingleton();
        }
        return this.instance;
    }

    // Getter del valor interno
    public getData(): string {
        return this.data;
    }

    // Setter del valor interno
    public setData(data: string): void {
        this.data = data;
    }
}

// === Demostración ===
function demoSingleton(): void {
    const instanciaA = MySingleton.getInstance();
    const instanciaB = MySingleton.getInstance();

    console.log("¿Ambas instancias son iguales?", instanciaA === instanciaB); // true

    instanciaA.setData("Actualizado desde instancia A");
    console.log("Datos desde instancia B:", instanciaB.getData()); // Debería reflejar el cambio
}

demoSingleton();
