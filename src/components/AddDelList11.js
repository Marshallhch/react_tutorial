import React, { useState } from "react";
//filter 함수
// const arr = [1, 2, 3, 4, 5];
// const del = arr.filter((num) => num !== 3);
// console.log(del);

//얕은 복사
// let arr1 = ["list1", "list2"];
// let arr2 = arr1;
// arr2[0] = "NewList";
// console.log(arr2);
// console.log(arr1);

//깊은복사
// let arr1 = ["list1", "list2"];
// let arr2 = ["list3", "list4"];
// let arr = arr1.concat(arr2);
// console.log(arr);
// console.log(arr1);

//1. 초기 상태 정의
//2. 반복 태그 출력
//3. input 초기 상태 정의
//4. input 태그 입력시 상태 변화 함수 정의
//5. input 태그 입력시 콘솔창 확인 함수 정의
//6. add button 초기 상태 정의
//7. add button 클릭 시 항목 추가 함수 정의
//8. 항목 더블 클릭 시 해당 항목 삭제 함수 정의(filter)
//9. 삭제 함수 태그(li)에 적용

const AddDelList11 = () => {
  //1. 초기 상태 정의
  const [names, setNames] = useState([
    { id: 1, text: "apple" },
    { id: 2, text: "banana" },
    { id: 3, text: "grape" },
    { id: 4, text: "orange" },
  ]);

  //3. input 초기 상태 정의
  const [inputText, setInputText] = useState("");

  //6. add button 초기 상태 정의
  const [nextItem, setNextItem] = useState(5);

  //4. input 태그 입력시 상태 변화 함수 정의
  const onChange = (e) => setInputText(e.target.value);

  //7. add button 클릭 시 항목 추가 함수 정의
  const onClick = () => {
    const nextItems = names.concat({ id: nextItem, text: inputText });
    setNextItem(nextItem + 1);
    setNames(nextItems);
    setInputText("");
  };

  //8. 항목 더블 클릭 시 해당 항목 삭제 함수 정의(filter)
  const onRemove = (id) => {
    const nextItems = names.filter((name) => name.id !== id);
    setNames(nextItems);
  };

  //5. input 태그 입력시 콘솔창 확인 함수 정의
  // const onChange = (e) => {
  //   setInputText(e.target.value);
  //   console.log(inputText);
  // };

  //2. 반복 태그 출력
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <div>
      <h1>Add and Delete List</h1>
      <input type='text' onChange={onChange} value={inputText} />
      <button onClick={onClick}>ADD</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default AddDelList11;
