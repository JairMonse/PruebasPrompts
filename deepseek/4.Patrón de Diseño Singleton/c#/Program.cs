using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/saludar", (HttpRequest request) => {
    var nombre = request.Query["nombre"].FirstOrDefault() ?? "Mundo";
    return Results.Ok(new { mensaje = $"Hola, {nombre}" });
});

app.Run();