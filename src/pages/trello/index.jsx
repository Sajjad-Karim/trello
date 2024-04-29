import FirstCard from "../../components/CardLists/FirstCard";
import SecondCard from "../../components/CardLists/SecondCard";
import ThirdCard from "../../components/CardLists/ThirdCard";
import { useCallback, useState } from "react";
import "./trello.css";

const Trello = () => {
  const [list, setList] = useState([]);
  const [Second, setSecond] = useState([]);
  const [third, setThird] = useState([]);

  const MoveNext = useCallback(
    (data, CurrentIndex, CurrentList, newList) => {
      const updatedValue = CurrentList.filter((item, index) => {
        return index !== CurrentIndex;
      });

      newList(updatedValue);

      if (CurrentList === list) {
        setSecond((preValue) => [...preValue, data]);
      } else if (CurrentList === Second) {
        setThird((preValue) => [...preValue, data]);
      }
    },
    [list, Second]
  );
  const handleDelete = (data, CurrentIndex, CurrentList, newList) => {
    const DeleteList = CurrentList.filter((item, index) => {
      return index !== CurrentIndex;
    });
    newList(DeleteList);
  };
  const handlePrev = useCallback(
    (data, CurrentIndex, CurrentList, newList) => {
      const DeleteList = CurrentList.filter((item, index) => {
        return index !== CurrentIndex;
      });
      newList(DeleteList);
      if (CurrentList === Second) {
        setList((preValue) => [...preValue, data]);
      } else if (CurrentList === third) {
        setSecond((preValue) => [...preValue, data]);
      }
    },
    [third, third]
  );

  return (
    <>
      <div className="trlloContainer">
        <div className="cards">
          <FirstCard
            list={list}
            setList={setList}
            MoveNext={MoveNext}
            handleDelete={handleDelete}
            handlePrev={handlePrev}
          />
          <SecondCard
            Second={Second}
            setSecond={setSecond}
            MoveNext={MoveNext}
            handleDelete={handleDelete}
            handlePrev={handlePrev}
          />
          <ThirdCard
            third={third}
            setThird={setThird}
            MoveNext={MoveNext}
            handleDelete={handleDelete}
            handlePrev={handlePrev}
          />
        </div>
      </div>
    </>
  );
};

export default Trello;
