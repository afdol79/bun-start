import { Elysia, file } from "elysia";
import { staticPlugin } from "@elysiajs/static";
const app = new Elysia()
  .use(staticPlugin())
  .get("/", () => "Hello Elysia")
  .post("/", () => "Post : Elysia")
  .put("/", () => "PUT : Elysia")
  .delete("/", () => "Delete : Elysia")
  .get("/html", file("public/index.html"))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
