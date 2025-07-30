const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (err) {
        console.error('MongoDB Connection Error:', err);
        process.exit(1); // Exit the process on connection failure
    }
};

module.exports = connectDB;