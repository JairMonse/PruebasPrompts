#include "crow.h"
#include <string>
#include <nlohmann/json.hpp>

using json = nlohmann::json;

int main()
{
    crow::SimpleApp app;

    // GET endpoint
    CROW_ROUTE(app, "/saludo").methods("GET"_method)
    ([](const crow::request& req) {
        std::string nombre = req.url_params.get("nombre") ? 
                           req.url_params.get("nombre") : "Usuario";
        
        json response;
        response["mensaje"] = "Hola, " + nombre;
        response["status"] = "success";
        
        return crow::response(200, response.dump());
    });

    // POST endpoint
    CROW_ROUTE(app, "/saludo").methods("POST"_method)
    ([](const crow::request& req) {
        std::string nombre = "Usuario";
        
        try {
            json request_body = json::parse(req.body);
            if (request_body.contains("nombre")) {
                nombre = request_body["nombre"];
            }
        } catch (const std::exception& e) {
            // Si hay error en JSON, usar nombre por defecto
        }
        
        json response;
        response["mensaje"] = "Hola, " + nombre;
        response["status"] = "success";
        
        return crow::response(201, response.dump());
    });

    // Configurar CORS y headers
    app.get_middleware<crow::CORSHandler>().global()
        .headers("Content-Type", "Authorization")
        .methods("GET"_method, "POST"_method);

    app.port(8080).multithreaded().run();
    return 0;
}