const { createNote } = require("./notes/createNote.controller");
const { deleteNote } = require("./notes/deleteNote.controller");
const { getNotes } = require("./notes/getNotes.controller");
const { getSingleNote } = require("./notes/getSingleNote.controller");
const { updateNote } = require("./notes/updateNote.controller");

module.exports = {
  getNotes,
  getSingleNote,
  createNote,
  updateNote,
  deleteNote,
};
