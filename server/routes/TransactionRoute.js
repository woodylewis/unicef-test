const express = require("express");
const {
  getAllTransactions,
  createTransaction
} = require("../controllers/TransactionController");

const router = express.Router();

router.route("/txs").get(getAllTransactions);
router.route("/newTrx").post(createTransaction);

module.exports = router;
