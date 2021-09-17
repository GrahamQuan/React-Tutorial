import { ADD, SUB, MUL, DIV } from './constants.js'

// 或者可以写成 initialState
const defaultState = {
  counter: 0
}

// reducer 纯函数
function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD:
      return {...state, counter: state.counter + action.num};
    case SUB:
      return {...state, counter: state.counter - action.num};
    case MUL:
      return {...state, counter: state.counter * action.num};
    case DIV:
      return {...state, counter: state.counter / action.num};
    default:
      return state;
  }
}

export default reducer