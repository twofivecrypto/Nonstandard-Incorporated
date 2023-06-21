import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function WelcomeMessage({ children }) {
  return <p>{children}</p>;
}

const CounterWithNameAndSideEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Here</button>
    </div>
  );
};

function App() {
  const message = 'Hello';

  const Counter = () => {
    const [count, setCount] = useState(0);
    const [anotherCounter, setAnotherCounter] = useState(0);

    return (
      <div>
        <div>
          <p>You clicked me {count} times...</p>
          <button onClick={() => setCount(count + 1)}>Click Here</button>
        </div>
        <div>
          <p>and this was clicked {anotherCounter} times</p>
          <button onClick={() => setAnotherCounter(anotherCounter + 1)}>Click me!</button>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <CounterWithNameAndSideEffect />
        <WelcomeMessage>Here is some message</WelcomeMessage>
        {message === 'Hello' ? <p>The message was "Hello!"</p> : null}
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

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
