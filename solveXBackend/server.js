// app.js

require("dotenv").config();
const express = require("express");
const app = express();
const route = require("./src/routes/index");
const cors = require('cors');
const config = require("./src/config/EnvConfig");
const mongo = require("./src/config/MongoDb")
const { MongoClient } = require('mongodb');

// Enable CORS
app.use(cors());
app.options('*', cors());
app.use("/", route);

// Define error handler for uncaught exceptions
process.on('uncaughtException', function (err) {
    console.log("Caught Exception", err);
});

// Initialize global variable for MongoDB client
global.mongoClient = null;
global.database = null


async function connectToMongoDB() {
    try {
        // Check if client already exists
        if (!global.mongoClient || !global.mongoClient.isConnected()) {
            // Create a new MongoDB client
            global.mongoClient = new MongoClient(mongo.mongodb.connectionString, mongo.mongodb.options);
            await global.mongoClient.connect();
            global.database = global.mongoClient.db('solvex1');
            console.log('Connected to MongoDB successfully');
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call connectToMongoDB to establish MongoDB connection
connectToMongoDB();

// Handle 404 errors
app.use(function (req, res, next) {
    if (res.status(404)) {
        return res.json({
            status: 404,
            message: "url.invalid"
        });
    }
    next();
});

// Start the server
const PORT = config.port;
app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
});
