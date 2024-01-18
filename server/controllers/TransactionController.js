const transactionService = require("../services/TransactionService");

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await transactionService.getAllTransactions();
    res.json({ data: transactions, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};