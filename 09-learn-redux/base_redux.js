import redux from "redux";

const initialState = {
  counter: 0,
};

// reducer 纯函数，是一个桥梁
function reducer(state = initialState, action) {
  switch (action.type) {
    case "add":
      return { ...state, counter: state.counter + action.num };
    case "sub":
      return { ...state, counter: state.counter - action.num };
    case "mul":
      return { ...state, counter: state.counter * action.num };
    case "div":
      return { ...state, counter: state.counter / action.num };

    default:
      return state;
  }
}

// store 需要传入reducer纯函数作为参数
const store = redux.createStore(reducer);

// subscribe 订阅（类比vue watch）：放在action执行之前
store.subscribe(() => {
  console.log("counter: " + store.getState().counter);
});

// action 本质是一个对象，下面是加减乘除action
const actionAdd = {
  type: "add",
  num: 1,
};

const actionSub = {
  type: "sub",
  num: 2,
};

const actionMul = {
  type: "mul",
  num: 3,
};

const actionDiv = {
  type: "div",
  num: 4,
};

// 执行action，也就是分配dispatch
store.dispatch(actionAdd);
store.dispatch(actionSub);
store.dispatch(actionMul);
store.dispatch(actionDiv);
