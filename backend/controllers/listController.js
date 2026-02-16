const List = require("../models/List")
const Board = require("../models/Board")
const Task = require("../models/Task");

// CREATE LIST
exports.createList = async (req, res) => {
  try {
    const { title, boardId } = req.body

    // Check board exists
    const board = await Board.findById(boardId)
    if (!board) {
      return res.status(404).json({ message: "Board not found" })
    }

    const list = await List.create({
      title,
      board: boardId,
      order: 0
    })

    res.status(201).json(list)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}


// GET LISTS BY BOARD
exports.getLists = async (req, res) => {
  try {
    const { boardId } = req.params

    const lists = await List.find({ board: boardId })
      .sort({ order: 1 })

    res.json(lists)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}


// DELETE LIST
exports.deleteList = async (req, res) => {
  try {
    const { id } = req.params;

    const list = await List.findById(id);
    if (!list) {
      return res.status(404).json({ message: "List not found" });
    }

    await Task.deleteMany({ list: id });
    await List.findByIdAndDelete(id);

    res.json({ message: "List deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

