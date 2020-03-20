const BalanceBoard = require("wii-balance-board-pi");
var express = require("express");
var app = express();

var balanceBoard = new BalanceBoard();

var BalanceData = null;
 
balanceBoard.connect();
 
balanceBoard.on("data", data => {
  BalanceData = data;
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/weight", (req, res, next) => {
  res.json(BalanceData);
});