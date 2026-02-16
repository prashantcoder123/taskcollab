import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [boards, setBoards] = useState([]);
  const [newBoard, setNewBoard] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    const res = await axios.get("/boards");
    setBoards(res.data);
  };

  const createBoard = async () => {
    await axios.post("/boards", { title: newBoard });
    setNewBoard("");
    fetchBoards();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Boards</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 rounded"
          placeholder="New Board"
          value={newBoard}
          onChange={(e) => setNewBoard(e.target.value)}
        />
        <button
          onClick={createBoard}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {boards.map((board) => (
          <div
            key={board._id}
            onClick={() => navigate(`/board/${board._id}`)}
            className="bg-gray-200 p-4 rounded cursor-pointer hover:bg-gray-300"
          >
            {board.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
