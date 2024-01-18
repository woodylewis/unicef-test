const express = require("express");
const {
  getAllTransactions
} = require("../controllers/TransactionController");

const router = express.Router();

router.route("/txs").get(getAllTransactions);

module.exports = router;
