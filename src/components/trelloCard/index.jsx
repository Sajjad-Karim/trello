import "./trelloCard.css";
import TrelloList from "../trellolist/TrelloList.";
import { useState } from "react";
const TrelloCard = ({ setList, list }) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const addList = () => {
    setList([...list, inputValue]);
    setInputValue("");
    setShowInput(false);
  };
  const handleClear = () => {
    setShowInput(false);
    setInputValue("");
  };

  return (
    <>
      <div className="container">
        <div className="title">
          <p>Title here</p>
          <button className="menubtn">...</button>
        </div>
        <div className="task">
          <TrelloList list={list} />
        </div>
        {showInput ? (
          <div className="addtitle">
            <input
              className="addtitle-input"
              type="text"
              placeholder="Enter a title for this card..."
              onChange={(e) => setInputValue(e.target.value)}
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
export default TrelloCard;
