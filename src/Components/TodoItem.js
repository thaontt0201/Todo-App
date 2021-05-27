import { useContext } from "react";
import { AppContext } from "../TodoContext";

const TodoItem = ({ item }) => {
  const { deleteButton, handleCheckboxChange } = useContext(AppContext);
  return (
    <div className="TodoItem">
      <input
        value={item.id}
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={item.done}
      />
      <label className={item.done ? "checkboxText" : ""}>{item.name}</label>
      <button className="deleteButton" onClick={() => deleteButton(item.id)}>
        &#10006;
      </button>
    </div>
  );
};

export default TodoItem;
