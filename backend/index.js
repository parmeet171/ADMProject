const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv').config();
const connectMongo = require('./congif/dbConnect');
const routes = require('./routes/index')
const app = express();

app.use(cors());
connectMongo();
app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`server running at ${PORT}`);
});