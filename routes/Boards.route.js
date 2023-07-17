const {Router} = require("express");
const { BoardsModel } = require("../models/Boards.model");

const boardsRouter = Router();

boardsRouter.get("/", async (req, res) => {
    try {
        const boards = await BoardsModel.find();
        res.status(200).send({"boards": boards});
    }
    catch(err) {
        res.status(401).send({"err": err.message});
    }
}) 



boardsRouter.patch("/", async (req, res) => {
    try {
        // const boards = await BoardsModel.findO(req.body);
        res.status(200).send("Updated successfully");
    }
    catch(err) {
        res.status(401).send({"err": err.message});
    }
}) 


module.exports = {
    boardsRouter
}
