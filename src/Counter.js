import React, { useState } from "react"; //상태를 사용하겠다!
import OddEvenResult from "./OddEvenResult";

const Counter = ({ initialValue }) => {
  // props로 받을수있따.

  console.log(initialValue); //undefined

  // console.log(props);
  const [count, setCount] = useState(initialValue); // props 값 가져와서 초기값 설정

  const onIncrease = () => {
    setCount(count + 1);
  };

  //누를때마다 1씩 감소
  const onDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2>{count}</h2> {/* 동적으로 변화해야되는 값 */}
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count} />
    </div>
  );
};

Counter.defaultProps = {
  //여기서 프롭스값 정해줄수있음
  // props값을 못가져오는 오류를 해결할 수 있음
  initialValue: 0,
};

export default Counter;
