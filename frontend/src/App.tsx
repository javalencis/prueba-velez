import React from "react";
import { Home } from "./pages/Home";
import "./styles/index.css";
import { AppContextProvider } from "./context/AppContextProvider";
import { Cart } from "./components/Cart";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import { Admin } from "./pages/Admin";

const App: React.FC = () => {
  console.log(window.location.pathname);
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        {window.location.pathname === "/admin" ? (
          <Admin />
        ) : (
          <>
            <Home />
            <Cart />
          </>
        )}
      </AppContextProvider>
    </ApolloProvider>
  );
};

export default App;
