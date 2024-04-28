import "./trelloCard.css";
import ListCards from "../Card/ListCards";
import { memo, useCallback, useState } from "react";
const FirstCard = ({
  list,
  handleAdd,
  setInputValue,
  inputValue,
  setShowInput,
  showInput,
  handleNext,
}) => {
  const handleClear = () => {
    setShowInput(false);
    setInputValue("");
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="title">
          <p>Title here</p>
          <button className="menubtn">...</button>
        </div>
        <div className="task">
          {list &&
            list.map((data, index) => {
              return (
                <ListCards data={data} key={index} handleNext={handleNext} />
              );
            })}
        </div>
        {showInput ? (
          <div className="addtitle">
            <input
              className="addtitle-input"
              type="text"
              placeholder="Enter a title for this card..."
              onChange={handleChange}
              value={inputValue}
            />
          </div>
        ) : null}

        <div className="add-hide">
          {showInput ? (
            <div className="bottons">
              <button className="addbtn" onClick={() => handleAdd(inputValue)}>
                Add
              </button>
              <button className="hide" onClick={handleClear}>
                X
              </button>
            </div>
          ) : (
            <button className="addbtn" onClick={() => setShowInput(true)}>
              Add a Card
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default memo(FirstCard);