import { Elysia } from "elysia";

export const app = new Elysia()
  .onError(({ error }) => {
    return {
      message: error.message,
    };
  })
  .get("/", () => {
    return {
      message: "Hello!",
    };
  })
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
