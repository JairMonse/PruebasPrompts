

@SpringBootApplication
@RestController
public class SaludoController {
    @GetMapping("/saludo")
    public String saludo(@RequestParam String nombre) {
        return "Hola, " + nombre;
    }
    public static void main(String[] args) {
        SpringApplication.run(SaludoController.class, args);
    }
    @Override
    public String toString() {
        return "SaludoController []";
    }
}

// Prueba con:
// curl "http://localhost:8080/saludo?nombre=Juan"

