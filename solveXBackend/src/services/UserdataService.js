// UserdataService.js


class UserdataService {
    static async userdataServiceRequest(params, header) {
        try {
            console.log("UUUUUUUUUUUUUUU",params)
            // Access the database and collection
            const collection = global.database.collection('test');

            // Insert params data into MongoDB collection
            const result = await collection.insertOne(params);
            console.log('Data saved to MongoDB:', result);

            // Return success response
            return {
                status: 200,
                message: "Data submitted successfully"
            };
        } catch (error) {
            console.error('Error in userdataServiceRequest:', error);
            // Return error response
            return {
                status: 500,
                message: "Internal server error"
            };
        }
    }
}

module.exports = UserdataService;
