const express = require("express");
const mongoose = require("mongoose")
const app = express();
const cookieParser = require("cookie-parser")
// const router = require("./routes/expense.routes");
const userRouter = require("./routes/user.routes");
// app.use(morgan("dev"));
const cors = require('cors')

// middleware
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

mongoose.connect('mongodb://127.0.0.1:27017/expense-tracker');
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(cookieParser())
const PORT = 3300;

// app.use("/budget", require("./routes/budget.routes"));
// app.use("/expense", require("./routes/expense.routes"));

app.use('/auth', userRouter)

app.listen(PORT, (req, res) => {
  console.log(`Listing at PORT ${PORT}...`);
});
