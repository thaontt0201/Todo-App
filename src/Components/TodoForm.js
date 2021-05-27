import { useContext } from "react";
import { AppContext } from "../TodoContext";

const TodoForm = () => {
  const { addItem, newItem, handleItemChange } = useContext(AppContext);
  return (
    <div className="TodoForm">
      <form onSubmit={addItem}>
        <input
          className="inputItem"
          value={newItem}
          onChange={handleItemChange}
          placeholder="Enter todo name here"
        />
      </form>
    </div>
  );
};

export default TodoForm;
