// UserdataService.js


class GetQuestionsService {
    static async getQuestionsRequest(params, header) {
        try {
            console.log("UUUUUUUUUUUUUUU",params)
            const collection = global.database.collection('test');
            const cursor = collection.find();
            const documentsArray = await cursor.toArray();
            console.log('Data Retrived :', documentsArray);

            // Return success response
            return {
                status: 200,
                message: "Data retrived successfully",
                Data: documentsArray
            };
        } catch (error) {
            console.error('Error in getQuestionsRequest:', error);
            // Return error response
            return {
                status: 500,
                message: "Internal server error"
            };
        }
    }
}

module.exports = GetQuestionsService;
