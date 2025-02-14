import express from "express";

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
  res.json({ msg: "Hello student" });
});

//create CURD funcionality for movies

//R-for reading movies
app.get("/movies", () => {});

//c-for creating movies
app.post("/movies", () => {});

//U -for updating movies
app.put("/movies/:id", () => {});
//D for Deliting movies
app.delete("/movies/:id", () => {});

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
