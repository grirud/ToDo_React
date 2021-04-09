import "./FilterToDoPanel.css";
export const FilterToDoPanel = ({
  handleChangeFilter,
  handleClickDelCompl,
  filter,
  count,
}) => {
  return (
    <div className="buttonPanel">
      <span>{count} items left</span>
      <div>
        <button
          style={{
            border: filter === "all" ? "1px solid rgb(168, 164, 164)" : "none",
          }}
          onClick={() => handleChangeFilter("all")}
        >
          All ToDo
        </button>
        <button
          style={{
            border: filter === "done" ? "1px solid rgb(168, 164, 164)" : "none",
          }}
          onClick={() => handleChangeFilter("done")}
        >
          Done ToDo
        </button>
        <button
          style={{
            border:
              filter === "active" ? "1px solid rgb(168, 164, 164)" : "none",
          }}
          onClick={() => handleChangeFilter("active")}
        >
          Active ToDo
        </button>
      </div>
      <button className="buttonDel" onClick={handleClickDelCompl}>
        Clear completed
      </button>
    </div>
  );
};
