const Budget = require("../model/budget.model");
const mongoose = require("mongoose");

const addBudget = async (req, res) => {
  try {
    const { name, amount } = req.body;
    const budget = new Budget({
      name,
      amount,
    });
    await budget.save();
    res.status(201).json({ message: "Budget added successfully" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const viewBudget = async (req, res) => {
  try {
    const { budgetId } = req.body;
    const element = Budget.findById(budgetId);
    res.status(201).json({ element });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const updateBudget = async (req, res) => {
  try {
    res.status(201).json({ message: "budget updated" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteBudget = async (req, res) => {
  try {
    res.status(201).json({ message: "budget deleted" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addBudget,
  viewBudget,
  updateBudget,
  deleteBudget,
};
