import React from "react";
import FormLogin from "./components/FormLogin/index.js";
import Main from "./components/Main/index.js";
import Title from './components/Title/index.js';

function App() {
  return (
    <Main>
      <Title>Login</Title>

      <FormLogin />
    </Main>
  );
}

export default App;
