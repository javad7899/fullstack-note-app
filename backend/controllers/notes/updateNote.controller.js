const Note = require("../../models/note.model");

exports.updateNote = async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedNote) return res.status(404).json({ error: "Note not found" });
    res.json(updatedNote);
  } catch (err) {
    res.status(400).json({ error: "Failed to update note", err });
  }
};
