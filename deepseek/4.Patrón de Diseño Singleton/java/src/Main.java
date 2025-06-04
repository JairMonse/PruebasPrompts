

@SpringBootApplication
@RestController
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

    @GetMapping("/saludar")
    public String saludar(@RequestParam(defaultValue = "Mundo") String nombre) {
        return "Hola, " + nombre;
    }
}