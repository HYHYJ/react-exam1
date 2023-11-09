import React, { useState } from "react"; //상태를 사용하겠다!

//* 리렌더:
//* Count 상태가 변할때마다 Counter함수가 다시 return 반환한다.
//* 상태가 변화하면 화면을 다시그려 리렌더
//* 함수가 다시 호출된다.
const Counter = () => {
  // 0에서 출방
  //1씩 증가하고
  //1씩 감소하는
  // count 상태

  const [count, setCount] = useState(0);
  // count: 상태값, setCount: 카운트라는 상태를 변화시키는 상태(변화함수)
  //useState(0): 0은 상태를 만드는 초기 값

  //누를때마다 1씩 증가
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
      <button onClick={onDecrease}>+</button>
      <button>-</button>
    </div>
  );
};

export default Counter;
