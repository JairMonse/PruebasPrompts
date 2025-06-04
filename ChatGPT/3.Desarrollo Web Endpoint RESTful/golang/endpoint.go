package main
import (
    "github.com/gin-gonic/gin"
)
func main() {
    r := gin.Default()
    r.GET("/saludo", func(c *gin.Context) {
        nombre := c.Query("nombre")
        c.JSON(200, gin.H{"mensaje": "Hola, " + nombre})
    })
    r.Run()
}

// Prueba con:
// curl "http://localhost:8080/saludo?nombre=Juan"
