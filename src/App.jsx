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
  const [isShow, setIsShow] = useState(true);

  const clickHandler = (id) => {
    const selectedBtn = tabDate.filter((tab) => tab.id == id);
    setDataBtn({ id: id, content: selectedBtn[0].content });
  };
  const handlerShowingTab = () => {
    // isShow ? setIsShow(false) : setIsShow(true);
    setIsShow(!isShow);
  };
  return (
    <div>
      <div className="showTab">
        <button onClick={handlerShowingTab}>
          {isShow ? "Hidden" : "Show Tab"}
        </button>
      </div>
      <div className={isShow ? "box" : "hidden-box"}>
        <div className="btns">
          {tabDate.map((btn) => {
            return (
              <div key={btn.id}>
                <Btn
                  btn={btn}
                  clickHandler={() => clickHandler(btn.id)}
                  dataBtn={dataBtn}
                />
              </div>
            );
          })}
        </div>
        <p>{dataBtn.content}</p>
      </div>
    </div>
  );
};

export default App;
