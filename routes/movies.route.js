import express from "express";
import {
  MovieCreate,
  MovieDelete,
  MovieDetail,
  MovieIndex,
  MovieUpdate,
} from "../controllers/movies.controller.js";

const router = express.Router();

//create CURD funcionality for movies

//R-for reading movies
router.get("/", MovieIndex);

router.get("/:id", MovieDetail);

//c-for creating movies
router.post("/", MovieCreate);

//U -for updating movies
router.put("/:id", MovieUpdate);
//D for Deliting movies
router.delete("/:id", MovieDelete);

export default router;
