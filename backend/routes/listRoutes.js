const express = require("express")
const router = express.Router()

const { createList, getLists, deleteList } = require("../controllers/listController")
const { protect } = require("../middleware/authMiddleware")

router.post("/", protect, createList)
router.get("/:boardId", protect, getLists)
router.delete("/:id", protect, deleteList)

module.exports = router
