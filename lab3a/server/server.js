import express from "express";

const app = express();
app.use(express.json());   // reads JSON request bodies; we need it from Lab 3B on

// In memory: no database. Change the names and fields to your own resource later.
const items = [
  { id: 1, name: "Blueberry", category: "Fruits" },
  { id: 2, name: "Yougurt", category: "Dairy" },
  { id: 3, name: "Apple", category: "Fruits" },
  { id: 4, name: "Milk", category: "Dairy" },
];

app.get("/api/items", (req, res) => {
  res.status(200).json(items);
});

app.get("/api/items/:id", (req, res) => {
  const item = items.find(i => i.id === Number(req.params.id));

  if (!item) {
    return res.status(404).json({
      error: {
        code: "NOT_FOUND",
        message: `No item with id ${req.params.id}`,
      },
    });
  }

  res.status(200).json(item);
});

app.listen(3001, () => {
  console.log("API running at http://localhost:3001");
});