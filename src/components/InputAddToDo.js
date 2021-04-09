import { useState } from "react";
import "./InputAddToDo.css";

export const InputAddToDo = ({ keyPressEnter }) => {
  const [value, setValue] = useState("");

  return (
    <div className="flex">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          keyPressEnter(value);
          setValue("");
        }}
      >
        <input
          placeholder="What needs to be Done?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
      </form>
    </div>
  );
};
