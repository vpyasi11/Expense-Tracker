const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// expense model
const expenseSchema = new Schema(
  {
    date: {
      type: Date,
      default: Date.now(),
    },
    description: {
      type: String,
      require: [true, "all field are mendatory"],
    },
    category: {
      type: String,
      require: [true, "all field are mendatory"],
    },
    amount: {
      type: Number,
      require: [true, "all field are mendatory"],
    },
    budegtid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "budget",
    },
  },
  { timestamp: true }
);

const ExpenseModel = mongoose.model("Expense", expenseSchema);

module.exports = ExpenseModel;
