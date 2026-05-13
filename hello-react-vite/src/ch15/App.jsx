import ColorBox from './components/ColorBox';
import ColorContext from './contexts/ColorContext';

const App = () => (
  <div style={{ padding: '20px' }}>
    <h1>Context API 기본 예제</h1>

    <h3>Provider 없음 → 기본값 'black' 사용</h3>
    <ColorBox />

    <h3>Provider로 'red' 공급</h3>
    <ColorContext.Provider value={{ color: 'red' }}>
      <ColorBox />
    </ColorContext.Provider>

    <h3>Provider로 'blue' 공급</h3>
    <ColorContext.Provider value={{ color: 'blue' }}>
      <ColorBox />
    </ColorContext.Provider>

    <h2>Ex1 실습1</h2>
    <p>ColorBox 컴포넌트에 적용해서, 박스 아래에 색깔 표기함.</p>
  </div>
);

export default App;
