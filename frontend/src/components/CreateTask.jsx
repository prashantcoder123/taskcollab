import { useState } from "react";

function CreateTask({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    if (!title) return;
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="mt-2">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Task"
        className="border p-2 w-full"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 mt-2 w-full"
      >
        Add Task
      </button>
    </div>
  );
}

export default CreateTask;
