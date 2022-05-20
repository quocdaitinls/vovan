const mongoose = require("mongoose");

const TaxSchema = mongoose.Schema({
  tax_id: String,
  name: String,
  info: {
    phone: String,
  },
});

const TaxModel = mongoose.model("Tax", TaxSchema);

module.exports = TaxModel;
