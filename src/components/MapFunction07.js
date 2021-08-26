import React from "react";

const MapFunction07 = () => {
  // const arr = [1, 2, 3, 4, 5, 6];
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  // }

  // arr.forEach((number) => {
  //   console.log(number);
  // });

  // const arr1 = arr.map((number) => {
  //   return number;
  // });

  // console.log(arr1);

  const names = ["홍길동", "한창호", "김연아", "아이유"];
  //1. map을 이용해 각각의 배열 요소를 추출
  //2. 각각의 요소에 키 속성 지정
  const nameList = names.map((name, idx) => <li key={idx}>{name}</li>);

  return <ul>{nameList}</ul>;
};

export default MapFunction07;
