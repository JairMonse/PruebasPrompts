[ApiController]
[Route("[controller]")]
public class SaludoController : ControllerBase
{
    [HttpGet]
    public string Get([FromQuery] string nombre = "amigo")
    {
        return $"Hola, {nombre}!";
    }
}
