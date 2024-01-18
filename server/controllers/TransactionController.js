const transactionService = require("../services/TransactionService");

const { Alchemy, Network, Wallet, Utils } = require("alchemy-sdk");
const dotenv = require("dotenv");

dotenv.config();
const { API_KEY, PRIVATE_KEY, RECEIVE_ADDRESS } = process.env;

const settings = {
  apiKey: API_KEY,
  network: Network.ETH_SEPOLIA,
};
const alchemy = new Alchemy(settings);

let wallet = new Wallet(PRIVATE_KEY);


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
    const nonce = await alchemy.core.getTransactionCount(
      wallet.address,
      "latest"
    );

    let ethTransaction = {
      to: RECEIVE_ADDRESS,
      value: Utils.parseEther("0.001"),
      gasLimit: "100000",
      maxPriorityFeePerGas: Utils.parseUnits("100", "gwei"),
      maxFeePerGas: Utils.parseUnits("100", "gwei"),
      nonce: nonce,
      type: 2,
      chainId: 11155111,
    };

    let rawTransaction = await wallet.signTransaction(ethTransaction);
    let tx = await alchemy.core.sendTransaction(rawTransaction);
    console.log('sent transaction');
    console.log(tx.hash);

    req.body.hash = tx.hash;
    const transaction = await transactionService.createTransaction(req.body);
    res.json({ data: transaction, status: "success"});
  } catch  (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAllTransactions = async (req, res) => {
  try {
    const transactions = await transactionService.deleteAllTransactions();
    res.json({ data: transactions, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};