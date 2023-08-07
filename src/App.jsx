import { useState } from "react";
import Btns from "../Component/Btns/Btns";

const App = () => {
  const tabDate = [
    { id: 1, title: "item1", content: "this is item1 content use it" },
    { id: 2, title: "item2", content: "this is item2 content use it" },
    { id: 3, title: "item3", content: "this is item3 content use it" },
  ];
  const [idBtn, setIdBtn] = useState({ id: 1, content: tabDate[0].content });
  const clickHandler = (id) => {
    const data = tabDate.filter((tab) => tab.id == id);
    setIdBtn({ id: id, content: data[0].content });
  };
  return (
    <div>
      {tabDate.map((btn) => {
        return (
          <div key={btn.id}>
            <Btns btns={btn} clickHandler={() => clickHandler(btn.id)} />
          </div>
        );
      })}
      <p>{idBtn.content}</p>
    </div>
  );
};

export default App;
