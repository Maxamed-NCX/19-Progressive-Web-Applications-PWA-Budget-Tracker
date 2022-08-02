const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget";
const mongoose = require("mongoose");

mongoose.connect(MONGODB_URI);

