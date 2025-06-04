#include "crow.h"
int main() {
    crow::SimpleApp app;
    CROW_ROUTE(app, "/saludo")([](const crow::request& req){
        auto nombre = req.url_params.get("nombre") ? req.url_params.get("nombre") : "";
        return crow::response("{\"mensaje\": \"Hola, " + std::string(nombre) + "\"}");
    });
    app.port(18080).multithreaded().run();
}

// Prueba con:
// curl "http://localhost:18080/saludo?nombre=Juan"
