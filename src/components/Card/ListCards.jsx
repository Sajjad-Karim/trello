import { useState } from "react";
import "./trelloList.css";
const ListCards = ({ data, handleNext }) => {
  return (
    <>
      <div className="trelloListContainer">
        <div className="list">
          <input type="text" className="list-input" readOnly value={data} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {!data && <button className="nextbtn">Previous</button>}
            <button className="nextbtn">Edit</button>
            {data && (
              <button className="nextbtn" onClick={() => handleNext(data)}>
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
