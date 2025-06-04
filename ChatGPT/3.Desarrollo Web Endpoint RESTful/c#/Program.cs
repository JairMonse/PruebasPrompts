using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder();
var app = builder.Build();

app.MapGet("/saludo", ([FromQuery] string nombre) =>
    new { mensaje = $"Hola, {nombre}" }
);

app.Run();

// Prueba con:
// curl "http://localhost:5000/saludo?nombre=Juan"
