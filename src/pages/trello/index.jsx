import { useState } from "react";
import TrelloCard from "../../components/trelloCard";
import "./trello.css";
const Trello = () => {
  const [list, setList] = useState([]);

  return (
    <>
      <div className="trlloContainer">
        <div className="cards">
          <TrelloCard setList={setList} list={list} />
          <TrelloCard />
          <TrelloCard />
        </div>
      </div>
    </>
  );
};
export default Trello;
