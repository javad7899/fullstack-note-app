const Note = require("../../models/note.model");

exports.getSingleNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: "Note not found" });

    res.json(note);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch note", err });
  }
};
