const Note = require("../../models/note.model");

exports.getNotes = async (req, res) => {
  try {
    const { sort = "createdAt", tag } = req.query;
    const filter = tag ? { tag } : {};
    const sortOption = sort === "title" ? { title: 1 } : { createdAt: -1 };

    const notes = await Note.find(filter).sort(sortOption);
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notes", err });
  }
};
