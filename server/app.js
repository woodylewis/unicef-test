const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const organizationRouter = require("./routes/OrganizationRoutes");
const transactionRouter = require("./routes/TransactionRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", organizationRouter);
app.use("/", transactionRouter);

const PORT = 4000;
const MONGO_URI = 'mongodb+srv://wls-admin:bzyuOslrQ3NKkp0H@cluster0.zumlq40.mongodb.net/unicef';

mongoose
.connect(MONGO_URI)
.then(() => {
  console.log(`db connected`);
})
.catch((err) => {
  console.log(err.message);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

module.exports = app;
