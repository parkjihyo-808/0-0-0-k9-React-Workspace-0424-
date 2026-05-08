import { produce } from 'immer';

const state = {
  user: {
    name: '홍길동',
    address: {
      city: '서울',
      zip: '12345',
    },
  },
  isLoggedIn: false,
};

// produce(원본상태, 업데이트함수)
const nextState = produce(state, (draft) => {
  // draft는 원본의 복사본(초안)입니다. 
  // 마치 직접 수정하는 것처럼 값을 바꿀 수 있습니다.
  draft.user.address.city = '부산';
});

console.log(nextState.user.address.city); // '부산'
console.log(state.user.address.city);     // '서울' (원본은 유지됨)