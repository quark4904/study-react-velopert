import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  // 1-7. setNumber를 사용할 때 그 상태를 넣어주는 것이 아니라, 값을 업데이트하는 함수를 파라미터로 넣음 ==> 컴포넌트 최적화와 관련됨
  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };
  // 1-7. setNumber를 사용할 때 그 상태를 넣어주는 것이 아니라, 값을 업데이트하는 함수를 파라미터로 넣음 - 끝

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
