const GetQuestionsService= require("../services/GetQuestionsService")
const logger = require("../config/Logger")


class GetQuestionsController{

    static async getQuestionsRequerst(req ,res){
        try{
            let response;
            const header = req?.headers
            const params = req?.body;
            response= await GetQuestionsService.getQuestionsRequest(params,header)
            console.log("PPPPPPPPPPPP",response)
            
            return res.status(response?.status).send(response);
        }
        catch(error){
            logger.error("Error In Verizon token " + error)

        }


    }

}


module.exports=GetQuestionsController