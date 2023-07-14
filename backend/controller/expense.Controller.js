const Expense = require("../model/expense.model");
const mongoose = require("mongoose");

const addExpense = async(req,res) => {
    try {
        res.status(201).json({ message: "expense added successfully" });
      } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: "Server error" });
      }
}

const viewExpense = async(req,res) => {
    try {
        res.status(201).json({ message: "data" });
      } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: "Server error" });
      }
}

const updateExpense = async(req,res) => {
    try {
        res.status(201).json({ message: "expense updated successfully" });
      } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: "Server error" });
      }
}

const deleteExpense = async(req,res) => {
    try {
        res.status(201).json({ message: "expense deleted successfully" });
      } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: "Server error" });
      }
}


module.exports= {addExpense, viewExpense, updateExpense, deleteExpense}