import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <Text display="what's up"/>
      <Text display="learning react huh?"/>
    </>
  );
}

function Text({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App;
