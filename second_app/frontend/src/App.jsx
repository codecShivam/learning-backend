import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1> Hello, this is my second sample app</h1>
      <div>Jokes: {jokes.length}</div>
      {jokes.map((joke) => {
        let { id, title, description } = joke;
        return (
          <div key={id}>
            <h3>{title}</h3>
            <h4>{description}</h4>
          </div>
        );
      })}
    </>
  );
}

export default App;
