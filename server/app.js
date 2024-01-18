const express = require("express");
const mongoose = require("mongoose");
const organizationRouter = require("./routes/OrganizationRoutes");
const transactionRouter = require("./routes/TransactionRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", organizationRouter);
app.use("/", transactionRouter);

const PORT = 3000;
const MONGO_URI = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

mongoose
.connect(MONGO_URI)
.then(() => {
  console.log(`Db Connected`);
})
.catch((err) => {
  console.log(err.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
