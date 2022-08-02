const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/budgetApi/transaction", async ({ body }, res) => {
  try {
    const dbTransaction = await çTransaction.create(body).then((dbTransaction) => {
      res.json(dbTransaction);
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/budgetApi/transaction/bulk", async ({ body }, res) => {
  try {
    const dbTransaction = await Transaction.insertMany(body);
    res.json(dbTransaction);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/budgetApi/transaction", async (req, res) => {
  try {
    const dbTransaction = await Transaction.find({})
      .sort({ date: -1 })
        res.json(dbTransaction);
    
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
