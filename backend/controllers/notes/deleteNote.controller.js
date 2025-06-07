const Note = require("../../models/note.model");

exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: "Note not found" });

    await note.deleteOne();
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete note", err });
  }
};
