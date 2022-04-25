import React from "react";

const Buttons = ({ name, color, handleClick }) => {
  return (
    <div>
      <button
        type="button"
        className={`btn btn-${color}`}
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Buttons;
