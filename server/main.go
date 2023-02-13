package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
)

func main() {
	fmt.Println("Hello world")
	app:=fiber.New()
	app.Get("/healthcheck", func(c *fiber.Ctx) error {
		return c.SendString("OK")
	})
	app.Listen(":4000")

}
