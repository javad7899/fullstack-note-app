const express = require("express");
const router = express.Router();

const notesRoutes = require("./note.routes");

router.use("/notes", notesRoutes);

module.exports = router;
