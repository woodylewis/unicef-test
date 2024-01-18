const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
  name: String,
  number: String,
});

module.exports = mongoose.model("Organization", organizationSchema);
