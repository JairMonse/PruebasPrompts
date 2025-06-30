class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        
        this.data = "Instancia Singleton";
        Singleton.instance = this;
        return this;
    }
    
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    
    getData() {
        return this.data;
    }
    
    setData(data) {
        this.data = data;
    }
}

// Prueba del patrón Singleton
function testSingleton() {
    console.log("=== Prueba del Patrón Singleton ===");
    
    // Crear instancias
    const instance1 = new Singleton();
    const instance2 = new Singleton();
    const instance3 = Singleton.getInstance();
    
    // Verificar que sean la misma instancia
    console.log("instance1 === instance2:", instance1 === instance2);
    console.log("instance1 === instance3:", instance1 === instance3);
    
    // Modificar datos en una instancia
    instance1.setData("Datos modificados");
    console.log("Datos en instance2:", instance2.getData());
    console.log("Datos en instance3:", instance3.getData());
    
    // Verificar referencias
    console.log("Referencia instance1:", instance1);
    console.log("Referencia instance2:", instance2);
}

testSingleton();