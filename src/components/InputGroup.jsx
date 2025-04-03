import React from "react";
const InputGroup = ({ name, type, onInvestmentInfoChange }) => {
  const HandleChange = (event) => {
    onInvestmentInfoChange(name, event.target.value);
  };
  return (
    <>
      <div className="">
        <label htmlFor="userInput">{name}</label>
        <input onChange={HandleChange} type={type}></input>
      </div>
    </>
  );
};

export default InputGroup;
