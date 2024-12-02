
const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB device connected successfully");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit the application if the connection fails
    }
};

module.exports = connectDB;
