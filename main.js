import express from "express";
import movieRoutes from "./routes/movies.route.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
  res.json({ msg: "Hello student" });
});

//connectionDB

connectDB();

app.use("/movies", movieRoutes);

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
