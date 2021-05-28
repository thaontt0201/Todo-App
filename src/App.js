import "./styles.css";
import TodoForm from "./Components/TodoForm";
import { useState } from "react";
import TodoList from "./Components/TodoList";
import FilterButtons from "./Components/FilterButtons";
import ToggleButton from "./Components/ToggleButton";
import { AppContext } from "./TodoContext";

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [filterItems, setFilterItems] = useState([]);

  const addItem = (event) => {
    event.preventDefault();
    if (newItem === "") {
      return window.alert("please enter todo name");
    }
    const itemObject = {
      name: newItem,
      done: false,
      id: items.length + 1
    };

    setItems([...items, itemObject]);
    setNewItem("");
  };

  const handleItemChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const id = Number(event.target.value);
    const findItem = items.find((item) => {
      return item.id === id;
    });
    // console.log("findItemB", findItem);
    const changeItem = { ...findItem, done: !findItem.done };
    setItems(items.map((item) => (item.id !== id ? item : changeItem)));
  };

  const deleteButton = (id) => {
    const filterItem = items.filter((item) => item.id !== id);
    const filterItem1 = filterItems.filter((item) => item.id !== id);
    setItems(filterItem);
    setFilterItems(filterItem1);
  };

  const showAllButton = () => {
    setShowAll(true);
  };

  const doneButton = () => {
    setFilterItems(items.filter((item) => item.done));
    setShowAll(false);
  };

  const activeButton = () => {
    setFilterItems(items.filter((item) => !item.done));
    setShowAll(false);
  };

  const toggleAllButton = () => {
    setShowAll(true);
    const changeItemState = items.map((item) => ({
      ...item,
      done: !item.done
    }));
    setItems(changeItemState);
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          items,
          setItems,
          newItem,
          setNewItem,
          showAll,
          setShowAll,
          filterItems,
          setFilterItems,
          addItem,
          handleItemChange,
          handleCheckboxChange,
          deleteButton,
          showAllButton,
          doneButton,
          activeButton,
          toggleAllButton
        }}
      >
        <h2>Todo App</h2>
        <TodoForm />
        <TodoList />
        <ToggleButton />
        <FilterButtons />
      </AppContext.Provider>
    </div>
  );
};
export default App;
