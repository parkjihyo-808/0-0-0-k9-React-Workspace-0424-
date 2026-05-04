// App.jsx
import './App.css';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import SassComponent from './SassComponent';
import SassEx1 from './SassEx1';

const App = () => (
  <div className="App">
    <header>
      <img className="logo" src="favicon.svg" alt="logo" />
      <p>Hello React!</p>
    </header>
    <h1> ch09 React 스타일링 예시</h1>
    <h2>실습1</h2>
    <p>
      문제1 아래 조건을 만족하는 카드 컴포넌트를 일반 CSS로 만들어 보세요. -
      흰색 배경, 둥근 모서리(border-radius: 12px), 그림자 효과 - 제목(h2)은
      파란색 - 내용(p)은 회색 - BEM 네이밍 규칙 사용 Ex1.jsx 에 만들었던 css
      적용해보기.
    </p>
    <Ex1
      title="안녕하세요. 좋은 아침입니다~"
      content="1교시, 컴포넌트 스타일링 실습 중입니다."
    ></Ex1>

    <h2>실습2</h2>
    <p>
      문제 1-2 : 버튼에 :hover와 :active 선택자를 활용하여 마우스를 올렸을 때
      배경색이 바뀌고, 클릭 시 살짝 눌리는 효과(transform: scale)를 주세요
      Ex2.jsx 에 만들었던 css 적용해보기.
    </p>
    <Ex2>점심메뉴</Ex2>

    <h2>Sass 예제1</h2>
    <p>버튼에 색상, 크기, 모서리 설정 부분 변수로 이용해서 사용해보기.</p>
    <SassEx1></SassEx1>

    <h2>Sass 예제2</h2>
    <p>공통 util.scss 에서 만든 내용을 SassComponent.scss 활용 연습 확인.</p>
    <SassComponent></SassComponent>
  </div>
);

export default App;
