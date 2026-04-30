import React, { useEffect, useRef, useState } from 'react';

const Ex10 = () => {
  const [count, setCount] = useState(0);

  // 포인트, state 가 변경되면 리렌더링 하게됨.
  // 하지만,  useRef 를 이용시에는 값이
  // 변경되어도 업데이트(리렌더링 영향을 안줌)가 안됩니다.
  const renderCount = useRef(0);

  // 의존성 배열을 생략시, 매번 콜백함수가 실행이 됩니다.
  useEffect(() => {
    renderCount.current += 1;
    console.log(`렌더링 회수 : ${renderCount.current}회`);
  });

  return (
    <div>
      <p>카운트 : {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
};

export default Ex10;
