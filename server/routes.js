const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");
const { getCollection } = require("./models");

// GET /api/todos
router.get("/todos", async (req, res) => {
  try {
    const collection = getCollection();
    const todos = await collection.find({}).toArray();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/todos
router.post("/todos", async (req, res) => {
  try {
    const collection = getCollection();
    let { todo } = req.body || {};

    if (todo === undefined) {
      return res.status(400).json({ mssg: "todo is required" });
    }

    todo = String(todo);

    const newTodo = await collection.insertOne({
      todo,
      status: false,
    });

    res.status(201).json({
      todo,
      status: false,
      _id: newTodo.insertedId,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/todos/:id
router.put("/todos/:id", async (req, res) => {
  try {
    const collection = getCollection();
    const _id = new ObjectId(req.params.id);
    const { status } = req.body || {};

    if (typeof status !== "boolean") {
      return res.status(400).json({ mssg: "invalid status" });
    }

    const updatedTodo = await collection.updateOne(
      { _id },
      { $set: { status: !status } }
    );

    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/todos/:id
router.delete("/todos/:id", async (req, res) => {
  try {
    const collection = getCollection();
    const _id = new ObjectId(req.params.id);

    const deletedTodo = await collection.deleteOne({ _id });
    res.status(200).json(deletedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;