import React, { Component } from "react";

//비구조화 할당

// const arr = [1, 2];
// const [one, two] = arr;
// const one = arr[0];
// const two = arr[1];

// console.log(one);
// console.log(two);

class ComponentProps03 extends Component {
  render() {
    const { name, age } = this.props;
    console.log(name);
    console.log(age);
    return (
      <div>
        {name}, {age}
      </div>
    );
  }
}

export default ComponentProps03;
