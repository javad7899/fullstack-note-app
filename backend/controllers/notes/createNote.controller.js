const Note = require("../../models/note.model");

exports.createNote = async (req, res) => {
  try {
    const newNote = new Note(req.body);
    await newNote.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ error: "Failed to create note", err });
  }
};
