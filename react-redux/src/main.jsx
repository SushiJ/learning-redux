import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Application from "./components/Application";
import { store } from "./store";
import { ChakraBaseProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ChakraBaseProvider>
      <React.StrictMode>
        <Application />
      </React.StrictMode>
    </ChakraBaseProvider>
  </Provider>
);
