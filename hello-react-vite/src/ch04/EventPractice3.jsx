import { useState } from 'react';

const EventPractice3 = () => {
  // useState 를 이용해서, 2가지를 반환한다. 꼭 기억하기!!!
  // form = {username: '', message: ''} , 초깃값이 할당됨.
  // 추가로, form 를 설정하는 setForm 함수도 포함됨.
  const [form, setForm] = useState({ username: '', message: '' });

  // 객체 form 에서, 변수명을 구조분해할당하기.
  const { username, message } = form;

  // 이벤트 리스너 추가
  // 키보드에 입력된 내용이 변경시 마다 동작하는 리스너
  const onChangeInput = (e) => {
    const nextForm = {
      ...form, // spread 연산자이고, 기존 객체를 복사.
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  //클릭시 동작하는 이벤트 리스너
  const onClickTest = () => {
    alert(username + ' : ' + message);
    setForm({ username: '', message: '' });
  };

  // 키를 입력시 , 확인하는 이벤트 리스너
  const onKeyPressTest = (e) => {
    if (e.key === 'Enter') {
      onClickTest();
    }
  };

  return (
    <div>
      <div>
        <h2>함수형 컴포넌트 모양, input 2개를 이용한 연습2</h2>
        <h3>username : {username}</h3>
        <h3>message : {message}</h3>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={username}
          onChange={onChangeInput}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={message}
          onChange={onChangeInput}
        />
        <button onClick={onClickTest} onKeyPress={onKeyPressTest}>
          확인
        </button>
      </div>
    </div>
  );
};

export default EventPractice3;
