@RestController
public class SaludoController {

    @GetMapping("/saludo")
    public String saludo(@RequestParam(defaultValue = "amigo", value = "") String nombre) {
        return "Hola, " + nombre + "!";
    }
}
