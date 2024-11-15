import React from "react";
import { Home } from "./pages/Home";
import "./styles/index.css";
import { AppContextProvider } from "./context/AppContextProvider";
import { Cart } from "./components/Cart";

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Home />
	  <Cart/>
    </AppContextProvider>
  );
};

export default App;
