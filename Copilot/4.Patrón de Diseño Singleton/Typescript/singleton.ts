class WebEndpointSingleton {
    private static instance: WebEndpointSingleton;

    private constructor() {
        console.log("Instancia creada");
    }

    static getInstance(): WebEndpointSingleton {
        if (!WebEndpointSingleton.instance) {
            WebEndpointSingleton.instance = new WebEndpointSingleton();
        }
        return WebEndpointSingleton.instance;
    }

    saludar(): void {
        console.log("Hola desde WebEndpointSingleton");
    }
}

// Prueba
const endpointInstancia1 = WebEndpointSingleton.getInstance();
const endpointInstancia2 = WebEndpointSingleton.getInstance();

console.log("¿Son la misma instancia?", endpointInstancia1 === endpointInstancia2); // true
endpointInstancia1.saludar();

