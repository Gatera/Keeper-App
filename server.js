const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require("./routes/api");

// const MONGODB_URI =
//   "mongodb+srv://admin-gatera:Pr5C6^qL@cluster0.b6nix.mongodb.net/React?retryWrites=true&w=majority";

//MongoDB connection
mongoose.connect("mongodb://localhost:27017/react", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//DB listener
mongoose.connection.on("connected", () => {
  console.log("DB is connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Saving data to our DB
const data = {
  title: "Welcome to my YouTube Channel",
  content: "Helping folks become full snack developers",
};

// Instance of the model
// const newKeep = new Keep(data);

// newKeep.save((err) => {
//   if (err) {
//     console.log("Ooops, something went wrong");
//   } else {
//     console.log("Data has been saved");
//   }
// });

app.use(cors());
// HTTP request logger
app.use(morgan("tiny"));
app.use("/api", routes);

app.listen(PORT, console.log(`Server has started at ${PORT}`));
