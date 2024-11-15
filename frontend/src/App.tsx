import React from "react";
import { Home } from "./pages/Home";
import "./styles/index.css";
import { AppContextProvider } from "./context/AppContextProvider";

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
};

export default App;
