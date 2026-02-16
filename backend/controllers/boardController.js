const Board = require("../models/Board")

// CREATE BOARD
exports.createBoard = async (req, res) => {
  try {
    const { title } = req.body

    const board = await Board.create({
      title,
      owner: req.user._id,
      members: [req.user._id]
    })

    res.status(201).json(board)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

// GET USER BOARDS
exports.getBoards = async (req, res) => {
  try {
    const boards = await Board.find({
      members: req.user._id
    }).populate("members", "name email")

    res.json(boards)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}
