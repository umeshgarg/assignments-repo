import { createStore } from "redux";

const increment = () => {
    return {
      type: "INCREMENT_COUNT"
    };
  };
  
  const counterReducer = (state = 1, action) => {
    if (action.type === "INCREMENT_COUNT") {
      return state + 1;
    }
  };
  
  let store = createStore(counterReducer);
  
  store.dispatch(increment());
  
  store.subscribe(() => {
    console.log(store.getState());
  });