import logo from './logo.svg';
import './App.css';
import TestComponent from "./components/TestComponent";
import React from 'react';

const Comp = () => {
  return <p>This is a comp component</p>
}

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App" id='root'>
            <TestComponent />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setCount(count + 1)}>
          Clicks: {count}
        </button>
        <Comp />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
