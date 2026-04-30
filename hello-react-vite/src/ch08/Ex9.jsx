import React from 'react';

import { useState, useRef } from 'react';

const Ex9 = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState('');

  // 순서1
  const inputEl = useRef(null);

  const onInsert = () => {
    alert(`입력한 텍스트 : ${text}`);
    setList(list.concat(text));
    setText('');
    // 순서3
    inputEl.current.focus();
  };

  return (
    <div>
      <input
        // 순서2
        ref={inputEl}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="텍스트 입력"
      />

      <button onClick={onInsert}>추가</button>

      <ul>
        {list.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ex9;
