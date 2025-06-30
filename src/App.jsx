import { useState } from "react";

function Todo() {
  const [item, setItem] = useState([]);
  const [task, setTask] = useState("");

  const Adding = () => {
    setItem([...item, task]);
    setTask("");
  };
  const Deleting = (index) => {
    const newItem = item.filter((_, i) => i !== index);
    setItem(newItem);
  };

  return (
    <>
      <input
        placeholder="Enter Anything"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={Adding}>Click Me</button>
      <ul>
        {item.map((a, b) => (
          <li key={b}>
            {a}
            <button onClick={() => Deleting(b)} style={{ margin: 10 }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
