import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTodo(input);
    setInput("");
  };

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        style={{
          padding: "0.75rem",
          width: "70%",
          borderRadius: "4px",
          border: "1px solid #ccc",
          fontSize: "1rem",
          marginRight: "0.5rem",
          boxSizing: "border-box",
        }}
      />
      <button
        onClick={handleAdd}
        style={{
          padding: "0.75rem 1.2rem",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#4caf50",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Agregar
      </button>
    </div>
  );
}

export default TodoInput;
