const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "4781cc0e0e6e65fcd4a58928190ecba303e2581d13f4694540fa2d34b3248585": 100, //Ben
  "9d1de7177625ed06d164597c9cbd80fbe3359a7df3deae294783b8293a146a28": 50, //Alex
  "8903374d10dadfc7291212b155b55425cfe1d74a22a7c2d5f4d732f5905657d3": 75, //Cameron
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
