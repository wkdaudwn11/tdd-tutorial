/* eslint-disable jest/valid-expect */

import { doIncrement, doDecrement } from "./App";

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
