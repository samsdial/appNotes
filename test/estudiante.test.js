const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const Estudiante = require("../models/estudiante");
const jwt = require("jsonwebtoken");

const generarToken = () => {
    return jwt.sign({userId: "fakeUserId"}, "secretKey", {expiresIn: "1h"});
}

afterEach(async() =>{
    await Estudiante.deleteMany();
})

afterAll(async()=>{
    await mongoose.connection.close();
})

describe("CRUD de estudiantes con JWT", () => {
    it("Crear estudiante", async () => {
        const token = generarToken();
        const res = await request(app)
    });
});