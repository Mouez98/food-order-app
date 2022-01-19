import "./App.css";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Header />
        <Meals />
      </div>
    </CartContextProvider>
  );
}

export default App;
