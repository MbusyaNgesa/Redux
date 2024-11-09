import Counter from "./components/Counter";

//Store
interface CounterState {
  value: number;
}
interface UserState {
  isSignedIn: boolean;
}

//Action
const incrementByAmount = { type: "INCREMENT" };
const decrementByAmount = { type: "DECREMENT" };

//Reducers

function App() {
  return <Counter />;
}

export default App;
