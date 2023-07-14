const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// budget model
const budgetSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "all field are mendatory"],
    },

    amount: {
      type: Number,
      require: [true, "all field are mendatory"],
    },
  },
  { timestamp: true }
);

const BudgetModel = mongoose.model("budget", budgetSchema);

module.exports = BudgetModel;
