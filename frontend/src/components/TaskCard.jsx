import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function TaskCard({ task }) {

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task._id
  });

  const style = {
    transform: CSS.Translate.toString(transform)
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-white p-2 mb-2 shadow rounded cursor-grab"
    >
      {task.title}
    </div>
  );
}

export default TaskCard;
