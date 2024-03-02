const UserdataService= require("../services/UserdataService")
const logger = require("../config/Logger")


class UserdataController{

    static async userdataRequerst(req ,res){
        try{
            let response;
            const header = req?.headers
            const params = req?.body;
            response= await UserdataService.userdataServiceRequest(params,header)
            console.log("PPPPPPPPPPPP",response)
            
            return res.status(response?.status).send(response?.message);
        }
        catch(error){
            logger.error("Error In Verizon token " + error)

        }


    }

}


module.exports=UserdataController