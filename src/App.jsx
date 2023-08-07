import { useState } from "react";
import Btn from "../Component/Btn/Btn";
import "./App.css";

const App = () => {
  const tabDate = [
    { id: 1, title: "Item 1", content: "--- this is item1 content use it ---" },
    { id: 2, title: "Item 2", content: "### this is item2 content use it ###" },
    { id: 3, title: "Item 3", content: "%%% this is item3 content use it %%%" },
  ];
  const [dataBtn, setDataBtn] = useState({
    id: 1,
    content: tabDate[0].content,
  });
  const clickHandler = (id) => {
    const selectedBtn = tabDate.filter((tab) => tab.id == id);
    setDataBtn({ id: id, content: selectedBtn[0].content });
  };
  return (
    <div className="box">
      <div className="btns">
        {tabDate.map((btn) => {
          return (
            <div key={btn.id}>
               <Btn btn={btn} clickHandler={() => clickHandler(btn.id)} dataBtn={dataBtn}/> 
            </div>
          );
        })}
      </div>

      <p>{dataBtn.content}</p>
    </div>
  );
};

export default App;
