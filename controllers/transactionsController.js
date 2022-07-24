const express = require("express")
const transactions = express.Router()
const transactionsData = require("../models/transactions")



transactions.get("/", (req, res) => {
    res.json(transactionsData)
})

transactions.get("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    if(transactionsData[arrayIndex]){
        res.json(transactionsData[arrayIndex]);
    } else {
        res.redirect("/")
    }
});

transactions.post("/", (req, res) => {
    transactionsData.push(req.body);
    res.json(transactionsData[transactionsData.length - 1]);
  });

transactions.delete("/:arrayIndex", (req, res)=> {
    const {arrayIndex} = req.params
    const deletedTransactions = transactionsData.splice(arrayIndex, 1)
    res.status(200).json(deletedTransactions)
});

transactions.put("/:arrayIndex", (req,res) => {
    const {arrayIndex} = req.params
      transactionsData[arrayIndex] = req.body
      res.status(200).json(transactionsData[arrayIndex])
});

module.exports = transactions