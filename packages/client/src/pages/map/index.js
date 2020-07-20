import React from "react";
import styles from "./index.module.css";
import logo from "./logo.svg";
import "./App.css";
import Hello from "shared/components/Hello";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hello />
        <div className={styles.helloWorld}>CSS MODULE TEST</div>
      </header>
    </div>
  );
}

export default App;
