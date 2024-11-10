import mongoose from "mongoose";

// Connect to MongoDB
export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, {
    dbName: "HEALTH_SYNC",
  })
    .then(() => {
      console.log("You are successfully connected to the database.");
    })
    .catch(err => {
      console.log(`Some error occurred while connecting to the database: ${err}`);
    });
};
