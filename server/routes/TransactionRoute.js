const express = require("express");
const {
  getAllTransactions,
  createTransaction,
  deleteAllTransactions
} = require("../controllers/TransactionController");

const router = express.Router();

router.route("/txs").get(getAllTransactions);
router.route("/newTrx").post(createTransaction);
router.route("/delTrx").get(deleteAllTransactions);

module.exports = router;
