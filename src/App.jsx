import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const [count, setCount] = useState(0);

  const changeNumber = () => {
    setCount((number) => number + 1);
  };

  return (
    <div className="app">
      <h1>Seja bem vindo</h1>
      <textarea
        value={text}
        cols="30"
        rows="10"
        onChange={(event) => setText(event.target.value)}
      />
      <p>{text}</p>

      <h4>Você cricou {count} vezes</h4>
      <button onClick={changeNumber} className="btn">
        Acresentar
      </button>
      <button onClick={() => setCount(0)} className="btn">
        Zerar
      </button>
    </div>
  );
}

export default App;
