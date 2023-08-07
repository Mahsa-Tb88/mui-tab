const Btns = ({btns , clickHandler }) => {
  return (
    <div>
      <button key={btns.id} onClick={clickHandler}>
        {btns.title}
      </button>
    </div>
  );
};

export default Btns;
