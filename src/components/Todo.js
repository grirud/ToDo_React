import "./Todo.css";
export const Todo = ({ handleRemove, handleClickChangeState, todo }) => {
  return (
    <div key={todo.id} className="toDoList">
      <span
        onClick={() => handleClickChangeState(todo.id)}
        style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
      >
        {todo.textToDo}
      </span>
      <button onClick={() => handleRemove(todo.id)}>X</button>
    </div>
  );
};
