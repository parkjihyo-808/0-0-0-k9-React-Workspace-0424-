import { useState, useRef } from 'react';

const Average3 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  // 순서1
  const inputEl = useRef(null);

  const onInsert = () => {
    const parsed = parseInt(number, 10);

    if (isNaN(parsed)) {
      // 순서3
      inputEl.current?.focus();
      return;
    }

    setList((prevList) => prevList.concat(parsed));
    setNumber('');

    // 순서3
    inputEl.current?.focus();
  };

  return (
    <div>
      <input
        // 순서2
        ref={inputEl}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="숫자 입력"
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

export default Average3;
