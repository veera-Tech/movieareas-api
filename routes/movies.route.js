import express from "express";

const router = express.Router();

//create CURD funcionality for movies

//R-for reading movies
router.get("/", (req, res) => {
  res.send("get all movie list");
});

//c-for creating movies
router.post("/", (req, res) => {
  res.send("creat a movie list");
});

//U -for updating movies
router.put("/:id", (req, res) => {
  res.send("update a movie");
});
//D for Deliting movies
router.delete("/:id", (req, res) => {
  res.send("Delete a movie");
});

export default router;
