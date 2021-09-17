import store from "./store/index.js";
import { add, sub, mul, div } from "./store/actionCreators.js";

store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch(add(1))
store.dispatch(sub(2))
store.dispatch(mul(3))
store.dispatch(div(4))