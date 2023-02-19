import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  //count=0 : count initializing
  if (action.type === "ADD") {
    console.log("they are telling me to add one");
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  }
  return count;
};
//reducer : data를 modify하는 function
//리턴한 값이 application의 data가 됨. 오직 countModifier만이 state를 수정할 수 있음.
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);
// Subscribe : store 안에 있는 변화 감지해 function 실행

add.addEventListener("click", () => {
  countStore.dispatch({ type: "ADD" });
  //action은 메세지를 전송하는 기능
  //리덕스가 countModifier(currentState=0,{ type: "ADD" })를 부름.
});
minus.addEventListener("click", () => {
  countStore.dispatch({ type: "MINUS" });
});
