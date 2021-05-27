import { useContext } from "react";
import { AppContext } from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { items, showAll, filterItems } = useContext(AppContext);
  return (
    <div className="TodoList">
      {showAll
        ? items.map((item) => {
            return <TodoItem key={item.id} item={item} />;
          })
        : filterItems.map((item) => {
            return <TodoItem key={item.id} item={item} />;
          })}
    </div>
  );
};

export default TodoList;
