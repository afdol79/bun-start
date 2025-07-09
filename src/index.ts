import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .post("/", () => "Post : Elysia")
  .put("/", () => "PUT : Elysia")
  .delete("/", () => "Delete : Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
