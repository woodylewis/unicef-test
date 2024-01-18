const transactionService = require("../services/TransactionService");

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await transactionService.getAllTransactions();
    res.json({ data: transactions, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTransaction = async (req, res) => {
  try {
    const transaction = await transactionService.createTransaction(req.body);
    res.json({ data: transaction, status: "success"});
  } catch  (err) {
    res.status(500).json({ error: err.message });
  }
};