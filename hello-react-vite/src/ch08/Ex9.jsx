import { useState, useRef } from 'react';

const AlertFocus = () => {
  // 1. 입력값을 저장할 상태(State)
  const [text, setText] = useState('');

  // 2. input 엘리먼트에 접근하기 위한 ref 생성
  const inputEl = useRef(null);

  // 3. 버튼 클릭 시 실행될 함수
  const onCheck = () => {
    // alert으로 현재 입력된 내용 보여주기
    alert(text);

    // input 값을 비우기
    setText('');

    // input 엘리먼트에 포커스 주기 
    inputEl.current?.focus();
  };

  return (
    <div>
      <h3>텍스트 입력 및 포커스 테스트</h3>
      <input
        ref={inputEl} // ref 연결
        value={text}
        onChange={(e) => setText(e.target.value)} // 입력할 때마다 상태 업데이트
        placeholder="내용을 입력하세요"
      />

      <button onClick={onCheck}>확인</button>
    </div>
  );
};

export default AlertFocus;