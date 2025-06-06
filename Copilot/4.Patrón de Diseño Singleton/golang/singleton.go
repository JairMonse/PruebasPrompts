package main

import (
    "fmt"
    "net/http"
)

func saludoHandler(w http.ResponseWriter, r *http.Request) {
    nombre := r.URL.Query().Get("nombre")
    if nombre == "" {
        nombre = "amigo"
    }
    fmt.Fprintf(w, "Hola, %s!", nombre)
}

func main() {
    http.HandleFunc("/saludo", saludoHandler)
    fmt.Println("Servidor en http://localhost:8080")
    http.ListenAndServe(":8080", nil)
}
