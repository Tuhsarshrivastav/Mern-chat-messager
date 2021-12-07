require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const connectDB = require("./config/db");
const userRoute = require("./routes/userRoute");

connectDB();

app.use(express.json());
app.use(cors());
app.use("api/user", userRoute);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`app listening on port ${port}!`));
