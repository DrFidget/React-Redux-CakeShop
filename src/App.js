import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCream from "./components/HooksIceCream";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <HooksIceCream />
      </div>
    </Provider>
  );
}

export default App;
