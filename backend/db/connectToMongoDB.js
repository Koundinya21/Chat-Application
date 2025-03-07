import mongoose from "mongoose";

const connectToMongoDB = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.MONGO_DB_URI)
            .then(() => {
                console.log("Connected to MongoDB");
                resolve();
            })
            .catch((error) => {
                console.log("Error connecting to MongoDB:", error.message);
                reject(error);
            });
    });
};


export default connectToMongoDB;