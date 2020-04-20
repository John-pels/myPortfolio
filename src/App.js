import React, { useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import Homepage from "./pages/homepage";
import { BrowserRouter as Router } from "react-router-dom";
import { Dark, Light } from "./components/Themes";
import Context from "./components/Context";
import reducer from "./components/Reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    isDark: false,
  });
  return (
    <Router>
      <Context.Provider value={{ state, dispatch }}>
        <ThemeProvider theme={state.isDark ? Dark : Light}>
          <>
            <div className="App">
              <GlobalStyles />
              <Homepage />
            </div>
          </>
        </ThemeProvider>
      </Context.Provider>
    </Router>
  );
}
