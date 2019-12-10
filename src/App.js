import React from 'react';
import "./styles.css";

const people = ["123"," 456", " 789"];

// 컴포넌트에 디자인 씌우려면 태그 css 만든 후 import로 가져옴
// 2개의 컴포넌트를 리턴하는 방법 = > fragment
function App() {
  return( 
  <>
  <h1> Hello world </h1>;
  <p>React</p>;

  <h3>{people}</h3>
  <button>increment</button>
  <button>decrement</button>
  </>
  );
}

export default App;
