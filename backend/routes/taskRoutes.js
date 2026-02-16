const express = require("express")
const router = express.Router()

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  assignTask
} = require("../controllers/taskController")

const { protect } = require("../middleware/authMiddleware")

router.post("/", protect, createTask)
router.get("/:boardId", protect, getTasks)
router.put("/:id", protect, updateTask)
router.delete("/:id", protect, deleteTask)
router.put("/:id/assign", protect, assignTask)

module.exports = router
