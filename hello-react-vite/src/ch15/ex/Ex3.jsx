import React from 'react';
// ### 📝 실습 문제 3

// > `contexts/ColorContext.js`에
// `fontSize` 상태(기본값: `'16px'`)를 추가하고,
//
// ColorBox에서 박스 안에 `state.color` 이름을 `state.fontSize` 크기로 표시하세요.
// SelectColors에는 폰트 크기를 변경하는 버튼(small/medium/large)도 추가하세요.
// >
import { createContext, useState } from 'react';

// 기본값: 타입 힌트 역할 (실제 값은 Provider가 공급)
const ColorContext2 = createContext({
  state: { color: 'black', subcolor: 'red', fontSize: '16px' },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
    setFontSize: () => {},
  },
});

// Provider를 감싼 커스텀 컴포넌트
// jsx 문법이 같이 사용중.
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');
  const [fontSize, setFontSize] = useState('16px');

  const value = {
    state: { color, subcolor, fontSize },
    actions: { setColor, setSubcolor, setFontSize },
  };

  return (
    <ColorContext2.Provider value={value}>{children}</ColorContext2.Provider>
  );
};

// Consumer를 별칭으로 export (사용 편의)
const { Consumer: ColorConsumer } = ColorContext2;

export { ColorProvider, ColorConsumer };
export default ColorContext2;



//2
import { useContext } from 'react';
import ColorContext from '../contexts/ColorContext2';

const ColorBox3 = () => {
  const { state } = useContext(ColorContext); // 한 줄로 Context 접근!

  return (
    <div style={{ padding: '10px' }}>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
          fontSize: state.fontSize,
          border: '2px solid #333',
          marginBottom: '8px',
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.subcolor,
          border: '1px solid #333',
        }}
      />
    </div>
  );
};

export default ColorBox3;

//3 

import { useContext } from 'react';
import ColorContext from '../contexts/ColorContext2';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors2 = () => {
  const { state, actions } = useContext(ColorContext); // actions만 꺼내서 사용

  return (
    <div style={{ padding: '10px' }}>
      <h2>색상을 선택하세요.</h2>
      <div style={{ display: 'flex', gap: '4px' }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: '36px',
              height: '36px',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
            onClick={() => actions.setColor(color)}
            onContextMenu={(e) => {
              e.preventDefault();
              actions.setSubcolor(color);
            }}
          />
        ))}
      </div>
      <p>
        메인 색깔: <span style={{ color: state.color }}>{state.color}</span>{' '}
        {'|'}
        보조 색깔:{' '}
        <span style={{ color: state.subcolor }}>{state.subcolor}</span>
      </p>
      <hr />
        <div>
            <span>폰트크기</span>
            {[['small', '12px'], ['medium', '16px'], ['large', '24px']].map(
                ([label,size]) =>(
                    <button key={label} onClick={() => actions.setFontSize(size)}>
                        {label}
                    </button>
                ))
            }
        </div>

    </div>
  );
};

export default SelectColors2;
