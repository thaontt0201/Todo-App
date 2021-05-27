import { useContext } from "react";
import { AppContext } from "../TodoContext";

const FilterButtons = () => {
  const { showAllButton, doneButton, activeButton } = useContext(AppContext);
  return (
    <div className="filterButtons">
      <label className="marginRight">Filter</label>
      <button
        className="marginRight filterButton allButton"
        onClick={showAllButton}
      >
        All
      </button>
      <button className="marginRight filterButton" onClick={doneButton}>
        Done
      </button>
      <button className="marginRight filterButton" onClick={activeButton}>
        Active
      </button>
    </div>
  );
};

export default FilterButtons;
