const mongoose = require("mongoose");

const connectDatabse = () => {
  mongoose.connect(process.env.DB_URL, {}).then((data) => {
    console.log(`Connect to mongoDb successfully ${data.connection.host}`);
  });
};

module.exports = connectDatabse;
