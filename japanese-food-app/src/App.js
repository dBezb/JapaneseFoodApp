import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./Store/CartContextProvider";

function App() {
  const [carIsVisible, setCarisVisible] = useState(false);

  const cartShowHandler = () => {
    setCarisVisible(true);
  };

  const cartHideHandler = () => {
    setCarisVisible(false);
  };

  return (
    <CartContextProvider>
      {carIsVisible && <Cart onHiddenCart={cartHideHandler} />}
      <Header onShowCart={cartShowHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
