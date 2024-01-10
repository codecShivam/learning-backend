import { useState } from "react";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  return (
    <>
      <h1> Hello, this is my second sample app</h1>
      <div>Jokes: {jokes.length}</div>
      {jokes.map((joke) => {
        let { id, title, description } = joke;
        <div key={id}>
          <h3>{title}</h3>
          <h4>{description}</h4>
        </div>;
      })}
    </>
  );
}

export default App;
