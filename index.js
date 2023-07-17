const express = require("express");
const { dbConnection } = require("./db");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
const { boardsRouter } = require("./routes/Boards.route");
app.use(cors());
app.use(express.json());

app.use("/boards", boardsRouter);

app.listen(port, async () => {
    try {
        await dbConnection;
        console.log("Connected to the Database");
    }
    catch(err) {
        console.log("Cannot connect to the Database");
    }
    console.log(`Server is running on the port: ${port}`);
})
