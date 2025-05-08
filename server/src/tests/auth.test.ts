import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "../app";
import User from "../models/User";

dotenv.config();

jest.setTimeout(15000);

beforeAll(async () => {
  const uri = process.env.MONGO_URI_TEST;
  if (!uri) throw new Error("MONGO_URI_TEST is not set in .env");
  await mongoose.connect(uri);
});

afterEach(async () => {
  await User.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("Auth routes", () => {
  it("should register a new user", async () => {
    const res = await request(app).post("/api/auth/register").send({
      firstName: "Alice",
      lastName: "Test",
      email: "alice@example.com",
      password: "Password1!",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("User created successfully");
  });

  it("should not allow duplicate registration", async () => {
    await request(app).post("/api/auth/register").send({
      firstName: "Bob",
      lastName: "Test",
      email: "bob@example.com",
      password: "Password1!",
    });

    const res = await request(app).post("/api/auth/register").send({
      firstName: "Bob",
      lastName: "Test",
      email: "bob@example.com",
      password: "Password1!",
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Email already exists");
  });

  it("should login with correct credentials", async () => {
    await request(app).post("/api/auth/register").send({
      firstName: "Charlie",
      lastName: "Test",
      email: "charlie@example.com",
      password: "Password1!",
    });

    const res = await request(app).post("/api/auth/login").send({
      email: "charlie@example.com",
      password: "Password1!",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Login successful");
    expect(res.body.user.firstName).toBe("Charlie");
    expect(res.body).toHaveProperty("token");
  });

  it("should reject login with wrong password", async () => {
    await request(app).post("/api/auth/register").send({
      firstName: "Dana",
      lastName: "Test",
      email: "dana@example.com",
      password: "Password1!",
    });

    const res = await request(app).post("/api/auth/login").send({
      email: "dana@example.com",
      password: "WrongPass1!",
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Invalid email or password");
  });
});
