import FirstCard from "../../components/CardLists/FirstCard";
import { useCallback, useState } from "react";
import "./trello.css";
const Trello = () => {
  const [list, setList] = useState([]);
  const [Second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState(false);
  const handleAdd = useCallback(
    (inputValue) => {
      setList([...list, inputValue]);
      setInputValue("");
      setShowInput(false);
    },
    [list]
  );
  const handleNext = (data) => {
    setSecond([...Second, data]);
  };
  console.log(Second);
  return (
    <>
      <div className="trlloContainer">
        <div className="cards">
          <FirstCard
            list={list}
            handleAdd={handleAdd}
            inputValue={inputValue}
            setInputValue={setInputValue}
            showInput={showInput}
            setShowInput={setShowInput}
            handleNext={handleNext}
          />
        </div>
      </div>
    </>
  );
};
export default Trello;
