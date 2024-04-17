import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        type="submit"
        className={`text-${props.text} border-none tracking-wider py-[.5px] text-[.6rem] lowercase px-[.5rem] focus:outline-none rounded bg-${props.background}`}
      >
        {props.buttonName}
      </button>
    </>
  );
};

export default Button;
