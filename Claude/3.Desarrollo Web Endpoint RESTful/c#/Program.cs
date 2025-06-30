using Microsoft.AspNetCore.Mvc;

namespace SaludoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SaludoController : ControllerBase
    {
        [HttpGet]
        public ActionResult<SaludoResponse> ObtenerSaludo([FromQuery] string nombre = "Usuario")
        {
            var response = new SaludoResponse
            {
                Mensaje = $"Hola, {nombre}",
                Status = "success"
            };
            return Ok(response);
        }

        [HttpPost]
        public ActionResult<SaludoResponse> CrearSaludo([FromBody] SaludoRequest? request)
        {
            var nombre = request?.Nombre ?? "Usuario";
            var response = new SaludoResponse
            {
                Mensaje = $"Hola, {nombre}",
                Status = "success"
            };
            return StatusCode(201, response);
        }
    }

    public class SaludoRequest
    {
        public string? Nombre { get; set; }
    }

    public class SaludoResponse
    {
        public string Mensaje { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
    }
}