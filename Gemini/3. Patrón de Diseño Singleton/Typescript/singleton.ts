class ConfiguracionGlobal {
  private static instancia: ConfiguracionGlobal;
  public readonly tiempoDeInicio: number;
  private configuraciones: Map<string, string> = new Map();

  // El constructor es privado para evitar la creación de instancias con 'new'
  private constructor() {
    this.tiempoDeInicio = Date.now();
    console.log("-> Instancia de ConfiguracionGlobal creada.");
  }

  // Método estático para obtener la única instancia de la clase
  public static obtenerInstancia(): ConfiguracionGlobal {
    if (!ConfiguracionGlobal.instancia) {
      ConfiguracionGlobal.instancia = new ConfiguracionGlobal();
    }
    return ConfiguracionGlobal.instancia;
  }
  
  public establecer(clave: string, valor: string): void {
      this.configuraciones.set(clave, valor);
  }

  public obtener(clave: string): string | undefined {
      return this.configuraciones.get(clave);
  }
}

function probarSingleton() {
  console.log("--- Patrón de Diseño: Singleton ---");
  console.log("Intentando obtener la primera instancia...");
  const instancia1 = ConfiguracionGlobal.obtenerInstancia();
  
  console.log("\nEstableciendo una configuración en la primera instancia...");
  instancia1.establecer("api_url", "https://api.miempresa.com");
  console.log(`Configuración 'api_url': ${instancia1.obtener("api_url")}`);

  console.log("\nIntentando obtener la segunda instancia...");
  const instancia2 = ConfiguracionGlobal.obtenerInstancia();

  console.log("\nComparando si ambas instancias son la misma...");
  if (instancia1 === instancia2) {
    console.log("✅ ¡Éxito! Ambas variables apuntan a la misma y única instancia.");
    console.log(`   Timestamp Instancia 1: ${instancia1.tiempoDeInicio}`);
    console.log(`   Timestamp Instancia 2: ${instancia2.tiempoDeInicio}`);
    console.log(`   Obteniendo 'api_url' desde la segunda instancia: ${instancia2.obtener("api_url")}`);
  } else {
    console.log("❌ Error: Se han creado instancias diferentes.");
  }
}

// Demostración
probarSingleton();