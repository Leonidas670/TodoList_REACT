function TodoItem({ tarea, toggleCompletada}) {
  const { id, text, completed } = todo;

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0.75rem 1rem",
        textDecoration: completed ? "line-through" : "none",
        backgroundColor: completed ? "#d3ffd3" : "#650404ff",
        marginBottom: "0.5rem",
        borderRadius: "4px",
        cursor: "pointer",
        alignItems: "center",
        fontSize: "1rem",
      }}
    >
      <span onClick={() => toggleComplete(id)}>{text}</span>
      <button
        onClick={() => deleteTodo(id)}
        style={{
          color: "white",
          backgroundColor: "#e53935",
          border: "none",
          borderRadius: "4px",
          padding: "0 0.5rem",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1rem",
          lineHeight: 1,
        }}
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;
