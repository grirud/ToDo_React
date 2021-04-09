import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { InputAddToDo } from "./components/InputAddToDo";
import { FilterToDoPanel } from "./components/FilterToDoPanel";
import { Todo } from "./components/Todo";
import "./index.css";

function App() {
  const [toDolist, setToDoList] = useState([]);
  const [visibleTodos, setVisibleTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [countActive, setCountActive] = useState(0);

  const handleRemove = (id) => {
    setToDoList(toDolist.filter((todo) => todo.id !== id));
  };

  function keyPressEnter(value) {
    if (!value) {
      alert("Write todo text");
      return;
    }
    setToDoList((prevState) => [
      ...prevState,
      {
        id: +new Date(),
        textToDo: value,
        isDone: false,
      },
    ]);
  }

  function handleClickChangeState(id) {
    setToDoList(
      toDolist.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }

  function handleClickDelCompl() {
    setToDoList(toDolist.filter((todo) => todo.isDone === false));
  }

  function handleChangeFilter(newFilter) {
    setFilter(newFilter);

    const todos = toDolist.filter((todo) => {
      if (newFilter === "done") {
        return todo.isDone && todo;
      }

      if (newFilter === "active") {
        return !todo.isDone && todo;
      }

      return todo;
    });

    setVisibleTodos(todos);
  }

  function handleChangeCountActive() {
    const toDoIsDone = toDolist.filter((todo) => todo.isDone !== true);
    const newCount = toDoIsDone.length;
    setCountActive(newCount);
  }

  useEffect(() => {
    handleChangeCountActive();
    handleChangeFilter(filter);
  }, [toDolist]);

  return (
    <React.Fragment>
      <span className={"todo"}>todos</span>
      <div className="app">
        <div className={"flex"}>
          <InputAddToDo keyPressEnter={keyPressEnter} />
        </div>
        <div className={"flex"}>
          {visibleTodos.map((todo) => (
            <Todo
              handleRemove={handleRemove}
              handleClickChangeState={handleClickChangeState}
              todo={todo}
            />
          ))}
        </div>

        <div className={"flex"}>
          <FilterToDoPanel
            filter={filter}
            count={countActive}
            handleChangeFilter={handleChangeFilter}
            handleClickDelCompl={handleClickDelCompl}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
