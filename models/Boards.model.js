const mongoose = require("mongoose");

const boardsSchema = mongoose.Schema({
  boards: {}
});

const BoardsModel = mongoose.model("board", boardsSchema);

module.exports = {
    BoardsModel
}
