const express = require("express");
const cors = require("cors");
const router = require("./routes/route");
const { default: mongoose } = require("mongoose");
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const DBURI = `${process.env.MONGODB_URL}`;
mongoose.connect(DBURI);
mongoose.connection.on("connected", () => console.log("Database Connect"));
mongoose.connection.on("error", () => console.log("error"));

app.use(router);

app.listen(PORT, () => console.log(`server running on localhost:${PORT}`));