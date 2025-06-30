import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@SpringBootApplication
@RestController
@RequestMapping("/api")
public class SaludoController {

    public static void main(String[] args) {
        SpringApplication.run(SaludoController.class, args);
    }

    @GetMapping("/saludo")
    public ResponseEntity<SaludoResponse> obtenerSaludo(
            @RequestParam(defaultValue = "Usuario") String nombre) {
        SaludoResponse response = new SaludoResponse("Hola, " + nombre, "success");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/saludo")
    public ResponseEntity<SaludoResponse> crearSaludo(
            @RequestBody(required = false) Map<String, String> request) {
        String nombre = (request != null && request.containsKey("nombre"))
                ? request.get("nombre")
                : "Usuario";

        SaludoResponse response = new SaludoResponse("Hola, " + nombre, "success");
        return ResponseEntity.status(201).body(response);
    }

    // Clase interna para representar la respuesta
    public static class SaludoResponse {
        private String mensaje;
        private String status;

        public SaludoResponse(String mensaje, String status) {
            this.mensaje = mensaje;
            this.status = status;
        }

        public String getMensaje() {
            return mensaje;
        }

        public String getStatus() {
            return status;
        }

        public void setMensaje(String mensaje) {
            this.mensaje = mensaje;
        }

        public void setStatus(String status) {
            this.status = status;
        }
    }
}
