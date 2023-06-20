import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function WelcomeMessage({ children }) {
  return <p>{children}</p>;
}

function App() {
  const message = 'Hello';

  const Counter = () => {

    const [count, setCount] = useState(0);
    const [anotherCounter, setAnotherCounter] = useState(0);

    return (
      
      <div>
        <div>
        <p>You clicked me {count} times...</p>
        <button onClick={() => setCount(count + 1)}>Click me!</button>
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
        const [count, setCount] = useState(0)
        <Counter />
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
export default App