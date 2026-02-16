import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";
import CreateTask from "./CreateTask";

function ListColumn({ list, tasks, onCreateTask }) {

  const { setNodeRef } = useDroppable({
    id: list._id
  });

  return (
    <div
      ref={setNodeRef}
      className="bg-gray-200 p-4 w-64 rounded"
    >
      <h3 className="font-bold mb-2">{list.title}</h3>

      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}

      <CreateTask
        onCreate={(title) => onCreateTask(list._id, title)}
      />
    </div>
  );
}

export default ListColumn;
