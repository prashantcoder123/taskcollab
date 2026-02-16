import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";

import ListColumn from "../components/ListColumn";
import CreateList from "../components/CreateList";

function Board() {
  const { id } = useParams();

  const [lists, setLists] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchLists();
    fetchTasks();
  }, [id]);

  const fetchLists = async () => {
    const res = await axios.get(`/lists/${id}`);
    setLists(res.data);
  };

  const fetchTasks = async () => {
    const res = await axios.get(`/tasks/${id}`);
    setTasks(res.data.tasks);
  };

  const createList = async (title) => {
    await axios.post("/lists", { title, boardId: id });
    fetchLists();
  };

  const createTask = async (listId, title) => {
    await axios.post("/tasks", {
      title,
      boardId: id,
      listId,
    });
    fetchTasks();
  };

  // 🔥 DRAG HANDLER
  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const newListId = over.id;

    await axios.put(`/tasks/${taskId}`, {
      list: newListId
    });

    fetchTasks();
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="p-6 flex gap-6 overflow-x-auto">
        <CreateList onCreate={createList} />

        {lists.map((list) => (
          <ListColumn
            key={list._id}
            list={list}
            tasks={tasks.filter((t) => t.list === list._id)}
            onCreateTask={createTask}
          />
        ))}
      </div>
    </DndContext>
  );
}

export default Board;
