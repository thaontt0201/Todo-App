import { useContext } from "react";
import { AppContext } from "../TodoContext";

const ToggleButton = () => {
  const { toggleAllButton } = useContext(AppContext);
  return (
    <div>
      <button className="toggleButton" onClick={toggleAllButton}>
        Toggle All
      </button>
    </div>
  );
};

export default ToggleButton;
