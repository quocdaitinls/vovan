const app = require("./app");
const mongoose = require("mongoose");

const url =
  "mongodb+srv://admin:admin@cluster0.7kmxa.mongodb.net/?retryWrites=true&w=majority";

const connectDb = async () => {
  return mongoose.connect(url);
};

const start = async () => {
  await connectDb(url);
  app.listen(3000, () => {
    console.log("app is running on port 3000");
  });
};

start();
