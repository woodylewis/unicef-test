const TransactionModel = require("../models/Transaction");

exports.getAllTransactions = async () => {
  return await TransactionModel.find();
};
