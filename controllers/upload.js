const helper = require('../helpers/upload');
const {errorHandler} = require("../utils/errorCodes");
const respond = require('../service/middleware/respond');
const upload = {
    upload : async (req, res) => {
        try {
            const data = await helper.upload(req);
            console.log("data is ::::",data)
            respond(res,data);
        }catch(err){
            console.log("error  ::::::", err);
            errorHandler('500',req);
        }
    },
    status : async (req, res) => {
        try {
            const data = await helper.status(req);
            respond(res,data);
        }catch(err){
            console.log("error :::",err);
            errorHandler('500',req);
        }
    }
}
module.exports = upload;