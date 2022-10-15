const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let id = 1;
const testList = [
  {
    id,
    text: "test 1",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/test", (req, res) => {
  return res.json(testList);
});

app.post("/api/test", (req, res) => {
  const { text } = req.body;
  testList.push({
    id: ++id,
    text,
  });

  return res.send("Success");
});

app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});
