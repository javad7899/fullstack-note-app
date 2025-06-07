const express = require("express");
const router = express.Router();

const {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
  getSingleNote,
} = require("../controllers/index.controller");

router.route("/").get(getNotes).post(createNote);

router.route("/:id").put(updateNote).delete(deleteNote).get(getSingleNote);

module.exports = router;
