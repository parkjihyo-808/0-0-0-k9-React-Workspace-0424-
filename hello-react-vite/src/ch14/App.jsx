import React from 'react';
import DummyJson from './dummyJson/DummyJson';
import Ex1 from './ex/Ex1';
import Jsonplaceholder from './jsonplaceholder/Jsonplaceholder';

const App = () => {
  return (
    <div>
      <h1>ch14 API Test</h1>
      <h2>dummyJson</h2>
      <DummyJson></DummyJson>
      <h2>Ex1, JSONPlaceholder 통신 확인 </h2>
      <Ex1></Ex1>
      <h2>Jsonplaceholder</h2>
      <Jsonplaceholder></Jsonplaceholder>
    </div>
  );
};

export default App;
