const TransactionModel = require("../models/Transaction");

exports.getAllTransactions = async () => {
  return await TransactionModel.find();
};

exports.createTransaction = async (transaction) => {
  return await TransactionModel.create(transaction);
};

exports.deleteAllTransactions = async () => {
  return await TransactionModel.deleteMany({});
};
