import { useState } from "react";
import "./trelloList.css";
import { MdOutlineDownloadDone } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
const TrelloList = ({ list }) => {
  const [disable, setDisabled] = useState(true);
  console.log(list);
  return (
    <>
      <div className="trelloListContainer">
        {list &&
          list.map((data, index) => {
            return (
              <div className="list">
                <input
                  type="text"
                  className={disable ? "list-input" : "visible"}
                  readOnly={disable}
                  value={data}
                />

                {disable ? (
                  <div className="edit-icon" onClick={() => setDisabled(false)}>
                    <MdOutlineEdit />
                  </div>
                ) : (
                  <div className="edit-icon" onClick={() => setDisabled(true)}>
                    <MdOutlineDownloadDone />
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
};
export default TrelloList;
