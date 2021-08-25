import React from "react";
import FirstComponent01 from "./components/FirstComponent01";
import SecondComponent02 from "./components/SecondComponent02";
import ComponentProps03 from "./components/ComponentProps03";

//내가 만든 컴포넌트 > App.js > index.js > index.html(화면에 보여지는 문서)
function App() {
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <FirstComponent01 />
      <SecondComponent02 />
      <ComponentProps03 name='han' age={20} />
    </div>
  );
}

export default App;
