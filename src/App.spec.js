/* eslint-disable jest/valid-expect, no-undef */

import React from "react";
import App, { doIncrement, doDecrement, Counter } from "./App";

describe("Local State", () => {
  it("state의 counter를 증가시켜야 한다.", () => {
    const state = { counter: 0 }; // state 하나 생성
    const newState = doIncrement(state); // App.js에 있는 doIncrement 호출
    expect(newState.counter).to.equal(1); // 값이 1이 나와야 정상!
  });

  it("state의 counter를 감소시켜야 한다.", () => {
    // 1. arrange - 값 정의
    const state = { counter: 0 };

    // 2. act - 실행
    const newState = doDecrement(state);

    // 3. assert - 단언
    expect(newState.counter).to.equal(-1);
  });
});

describe("App Component", () => {
  it("Counter 컴포넌트가 렌더링이 잘 됐는지 체크", () => {
    const wrapper = shallow(<App />);

    // 여기에서 length는 컴포너트를 그린 횟수? 라고 보면 될듯. <Counter />를 두번 그렸다면 length는 2가 됨.
    expect(wrapper.find(Counter)).to.have.length(1);
  });

  it("Counter 컴포넌트에 Props가 잘 전달되는지 체크", () => {
    const wrapper = shallow(<App />);
    let counterWrapper = wrapper.find(Counter);

    expect(counterWrapper.props().counter).to.equal(0);

    // 1. state가 -1이면
    wrapper.setState({ counter: -1 });

    counterWrapper = wrapper.find(Counter);

    // 2. <Counter />에서 넘겨받은 props도  -1이어야 함.
    expect(counterWrapper.props().counter).to.equal(-1);
  });

  it("Count를 하나 올린다.", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ counter: 0 });
    wrapper.find("button").at(0).simulate("click");
    expect(wrapper.state().counter).to.equal(1);
  });

  it("Count를 하나 내린다.", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ counter: 0 });
    wrapper.find("button").at(1).simulate("click");
    expect(wrapper.state().counter).to.equal(-1);
  });
});
