// Ejemplo con Crow (framework C++ similar a Flask)
#include "crow_all.h"

int main() {
    crow::SimpleApp app;

    CROW_ROUTE(app, "/saludo")
    ([](const crow::request= req.url_params.get("nombre");
        std::string saludo = "Hola, ";
        saludo += (nombre ? nombre : "amigo");
        saludo += "!";
        return saludo;
    });

    app.port(18080).multithreaded().run();
}
