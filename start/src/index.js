import configureStore from "./store";
import * as actions from "./actions";

const store = configureStore();

store.subscribe(() => {
  console.log("Store changed!");
});

store.dispatch(
  actions.addTodo({
    id: 1,
    title: "Watch Movie"
  })
);

console.log(store.getState());
