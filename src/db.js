import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://marrevillaga03:geYOx7RijS144daB@cluster0.oridwoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Si se piudo ");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
