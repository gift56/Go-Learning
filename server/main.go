package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
)

type Todo struct {
	ID int `json:"id"`
	Title string `json:"title"`
	ID int `json:"id"`
	ID int `json:"id"`
}

func main() {
	fmt.Println("Hello world")
	app := fiber.New()
	app.Get("/healthcheck", func(c *fiber.Ctx) error {
		return c.SendString("OK")
	})
	log.Fatal(app.Listen(":4000"))

}
