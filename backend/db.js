const mongoose = require("mongoose");
require("dotenv/config");

return mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("conected to db")
);
