//컴포넌트의 상태 사용
//useState는 새롭게 갱신되는 상태를 유동적으로 변화 시켜주는 기능
//react 프레임워크의 useState 모듈 사용

import React, { useState } from "react";

const UseState04 = () => {
  const [bye, setBye] = useState("인사");
  //배열의 첫번째 인자는 상태의 초기값을 지정한다
  //배열의 두번째 인자는 상태를 어떻게 변화시킬 것인지를 정의하는 함수

  const sayHi = () => setBye("어서오세요.");
  const sayBye = () => setBye("안녕히 가세요.");

  return (
    <div>
      <button onClick={sayHi}>입장</button>
      <button onClick={sayBye}>퇴장</button>
      <h1>{bye}</h1>
    </div>
  );
};

export default UseState04;
