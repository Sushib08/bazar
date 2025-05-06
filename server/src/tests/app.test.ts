import request from "supertest";
import app from "../app";

describe("GET /", () => {
  it("should return a 200 status and a message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("API is running...");
  });
});
