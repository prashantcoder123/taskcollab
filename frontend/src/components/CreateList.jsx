import { useState } from "react";

function CreateList({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    if (!title) return;
    onCreate(title);
    setTitle("");
  };

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New List"
        className="border p-2 mr-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white p-2"
      >
        Add List
      </button>
    </div>
  );
}

export default CreateList;
