const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  amount: Number,
  org: String,
  hash: String
});

module.exports = mongoose.model("Transaction", transactionSchema);
