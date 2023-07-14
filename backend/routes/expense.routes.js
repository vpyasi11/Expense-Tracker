const express = require("express");
const router = express.Router();
const { addExpense, viewExpense, updateExpense, deleteExpense } = require("../controller/expense.Controller");


//add Expense
router.get("/addExpense", addExpense);
//view Expense
router.get("/viewExpense", viewExpense);
//update Expense
router.get("/updateExpense", updateExpense);
//delete Expense
router.get("/deleteExpense", deleteExpense);


module.exports = router;
