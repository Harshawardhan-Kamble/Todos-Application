const dotenv = require("dotenv");
dotenv.config();
const cors=require("cors")
const { Todo } = require("./db");
const { createTodo, updateTodo } = require("./types");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors())
app.post("/todo", async (req, res) => {
  // Zod validation
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(411).json({ msg: "You have entered wrong input" });
    return;
  }
  // Mongodb
  await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "Todo created",
  });
});
app.get("/todos", async (req, res) => {
  const todos = await Todo.find({});
  res.json({
    todos,
  });
});
app.put("/completed", async (req, res) => {
  // Zod validation
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({ msg: "Something went wrong" });
    return;
  }
  await Todo.updateOne(
    {
      _id: updatePayload.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo mark Completed",
  });
  // Mongodb
});
app.listen(3000, () => {
  console.log("Server Started on host 3000");
});
