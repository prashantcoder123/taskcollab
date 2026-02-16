const Task = require("../models/Task")
const Activity = require("../models/Activity")
// const { io } = require("../server")
const socket = require("../config/socket")

// CREATE TASK
exports.createTask = async (req, res) => {
  try {
    const { title, description, boardId, listId } = req.body

    const task = await Task.create({
      title,
      description,
      board: boardId,
      list: listId,
      createdBy: req.user._id
    })

    // Log activity
    await Activity.create({
      board: boardId,
      user: req.user._id,
      action: "Created Task",
      details: title
    })
    // 🔥 REAL-TIME EMIT
socket.getIO().to(boardId).emit("taskCreated", task)

    res.status(201).json(task)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}


// GET TASKS BY BOARD
exports.getTasks = async (req, res) => {
  try {
    const { boardId } = req.params

    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 5
    const search = req.query.search || ""

    const skip = (page - 1) * limit

    const query = {
      board: boardId,
      title: { $regex: search, $options: "i" }
    }

    const totalTasks = await Task.countDocuments(query)

    const tasks = await Task.find(query)
      .populate("assignedTo", "name email")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)

    res.json({
      totalTasks,
      currentPage: page,
      totalPages: Math.ceil(totalTasks / limit),
      tasks
    })

  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}



// UPDATE TASK (move or edit)
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    )
 // 🔥 REAL-TIME EMIT
     socket.getIO()
      .to(updatedTask.board.toString())
      .emit("taskUpdated", updatedTask)
    res.json(updatedTask)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}


// DELETE TASK
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params

    const task = await Task.findById(id)

    await Task.findByIdAndDelete(id)

     socket.getIO()
      .to(task.board.toString())
      .emit("taskDeleted", id)

    res.json({ message: "Task deleted" })
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

// ASSIGN USER TO TASK
exports.assignTask = async (req, res) => {
  try {
    const { id } = req.params
    const { userId } = req.body

    const task = await Task.findById(id)
    if (!task) {
      return res.status(404).json({ message: "Task not found" })
    }

    task.assignedTo = userId
    await task.save()

    // 🔥 REAL-TIME EMIT
    socket.getIO()
      .to(task.board.toString())
      .emit("taskAssigned", task)

    res.json(task)

  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}
