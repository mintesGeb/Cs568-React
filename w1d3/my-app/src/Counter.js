import React from "react";

function Counter(props) {
  return (
    <div>
      <p>{props.currentValue}</p>
      <input type="button" value="increment" onClick={props.onClickHandler} />
    </div>
  );
}

export default Counter;
