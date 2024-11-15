import React from "react";
import { Home } from "./pages/Home";
import "./styles/index.css";
import { AppContextProvider } from "./context/AppContextProvider";
import { Cart } from "./components/Cart";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        <Home />
        <Cart />
      </AppContextProvider>
    </ApolloProvider>
  );
};

export default App;
