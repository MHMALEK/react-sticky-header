import React from "react";
import logo from "./logo.svg";
import "./App.css";

import StickyHeader from "./home";

function App() {
  return (
    <div className="App">
      <StickyHeader />
      <article className="App-header">
        <p>demo</p>
      </article>
    </div>
  );
}

export default App;
