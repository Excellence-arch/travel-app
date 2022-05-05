import React from "react";

const Buttons = ({ name, types, color, handleClick }) => {
  return (
    <div>
      <button
        type={types}
        className={`btn btn-${color} w-100 my-2`}
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Buttons;
