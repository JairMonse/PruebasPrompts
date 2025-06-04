package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/saludar", func(c *gin.Context) {
		nombre := c.DefaultQuery("nombre", "Mundo")
		c.JSON(200, gin.H{"mensaje": "Hola, " + nombre})
	})
	r.Run()
}

/*

go mod init singleton

go get github.com/gin-gonic/gin



*/