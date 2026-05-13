import ColorContext from '../contexts/ColorContext';

const ColorBox = () => (
  <ColorContext.Consumer>
    {value => (
      // 박스와 텍스트를 함께 보여주기 위해 부모 div로 감싸줌
      <div>
        <div
          style={{
            width: '64px',
            height: '64px',
            background: value.color,
            border: '1px solid #333',
            marginBottom: '10px', // 텍스트와의 간격을 위해 추가
          }}
        />
        <p>현재 색상: <strong>{value.color}</strong></p>
      </div>
    )}
  </ColorContext.Consumer>
);

export default ColorBox;