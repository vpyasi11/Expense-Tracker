const express = require("express");
const router = express.Router();
const {
  addBudget,
  viewBudget,
  updateBudget,
  deleteBudget,
} = require("../controller/budget.controller");

//add budget
router.get("/addBudget", addBudget);
//view budget
router.get("/viewBudget", viewBudget);
//update budget
router.get("/updateBudget", updateBudget);
//delete budget
router.get("/deleteBudget", deleteBudget);

module.exports = router;
