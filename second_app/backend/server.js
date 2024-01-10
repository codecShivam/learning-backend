import express from "express";

const app = express();

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke 1",
      description: "This is the first joke",
    },
    {
      id: 2,
      title: "Joke 2",
      description: "This is the second joke",
    },
    {
      id: 3,
      title: "Joke 3",
      description: "This is the third joke",
    },
    {
      id: 4,
      title: "Joke 4",
      description: "This is the fourth joke",
    },
    {
      id: 5,
      title: "Joke 5",
      description: "This is the fifth joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
