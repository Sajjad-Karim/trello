import { useState } from "react";
import "./trelloList.css";
const ListCards = ({
  data,
  CurrentIndex,
  CurrentList,
  newList,
  MoveNext,
  list,
  third,
  handleDelete,
  handlePrev,
}) => {
  const handleNext = () => {
    MoveNext(data, CurrentIndex, CurrentList, newList);
  };
  const handleDeleteItems = () => {
    handleDelete(data, CurrentIndex, CurrentList, newList);
  };
  const handlePrevItems = () => {
    handlePrev(data, CurrentIndex, CurrentList, newList);
  };
  return (
    <>
      <div className="trelloListContainer">
        <div className="list">
          <input type="text" className="list-input" readOnly value={data} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {list ? null : (
              <button className="nextbtn" onClick={handlePrevItems}>
                Previous
              </button>
            )}
            <button className="nextbtn">Edit</button>
            <button className="nextbtn" onClick={handleDeleteItems}>
              delete
            </button>
            {third ? null : (
              <button className="nextbtn" onClick={handleNext}>
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ListCards;
