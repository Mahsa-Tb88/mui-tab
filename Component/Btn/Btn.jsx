import style from "./Btn.module.css";
const Btn = ({ btn, clickHandler, dataBtn }) => {
  {
    // console.log(dataBtn,btn.id);
  }
  return (
    <div>
      <button
        key={btn.id}
        onClick={clickHandler}
        className={dataBtn.id == btn.id ? style.active : style.btn}
      >
        {btn.title}
      </button>
    </div>
  );
};

export default Btn;
