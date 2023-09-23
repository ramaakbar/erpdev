import { describe, expect, it } from "bun:test";

import { app } from "..";

const url = "http://localhost:3000";

describe("Root", () => {
  it("GET /", async () => {
    const res = await app.handle(new Request(url));
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body).toEqual({ message: "Hello!" });
  });
});
