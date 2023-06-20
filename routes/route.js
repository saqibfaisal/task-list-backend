const express = require("express");

const router = express.Router();

const Todos = require("../controller/todo");
const signup = require("../controller/signUp");
const login = require("../controller/login");

router.post("/api/todo/signup", signup)

router.post("/api/todo/login", login)

router.post("/api/todo", Todos.add)

router.get("/api/todo", Todos.get)

router.patch("/api/todo/:id", Todos.update);

router.delete("/api/todo/:id", Todos.delete);

module.exports = router;