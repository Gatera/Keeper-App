const mongoose = require("mongoose");

//DB Schema
const keepSchema = new mongoose.Schema({
  title: String,
  content: String,
});

//DB Model
const Keep = mongoose.model("Keep", keepSchema);

module.exports = Keep;
