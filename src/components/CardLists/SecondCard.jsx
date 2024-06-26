import "./trelloCard.css";
import ListCards from "../Card/ListCards";
import { useState } from "react";
const SecondCard = ({
  Second,
  setSecond,
  MoveNext,
  handleDelete,
  handlePrev,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleClear = () => {
    setShowInput(false);
    setInputValue("");
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const addList = () => {
    if (inputValue.length > 0) {
      setSecond((preVal) => [...preVal, inputValue]);
      setInputValue("");
      setShowInput(false);
    }
  };
  return (
    <>
      <div className="container">
        <div className="title">
          <p>Title here</p>
          <button className="menubtn">...</button>
        </div>
        <div className="task">
          {Second &&
            Second.map((data, index) => {
              return (
                <ListCards
                  data={data}
                  key={index}
                  CurrentIndex={index}
                  newList={setSecond}
                  CurrentList={Second}
                  MoveNext={MoveNext}
                  handlePrev={handlePrev}
                  handleDelete={handleDelete}
                />
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
              <button className="addbtn" onClick={addList}>
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
export default SecondCard;
