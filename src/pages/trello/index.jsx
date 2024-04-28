import FirstCard from "../../components/CardLists/FirstCard";
import SecondCard from "../../components/CardLists/SecondCard";
import ThirdCard from "../../components/CardLists/ThirdCard";
import { useCallback, useState } from "react";
import "./trello.css";
const Trello = () => {
  const [list, setList] = useState([]);
  const [Second, setSecond] = useState([]);
  const [third, setThird] = useState([]);

  return (
    <>
      <div className="trlloContainer">
        <div className="cards">
          <FirstCard list={list} setList={setList} />
          <SecondCard Second={Second} setSecond={setSecond} />
          <ThirdCard third={third} setThird={setThird} />
        </div>
      </div>
    </>
  );
};
export default Trello;
