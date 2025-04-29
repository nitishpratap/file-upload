/**
 * handle returning the error response
 * @param errCode {string}
 * @param req
 * */
module.exports.errorHandler = (errCode, req) => {
    let path = req.originalUrl; // get path of the request
    return handleErrorByApi(errCode, path); //return the error response
}

/**
 * handle the error codes by api
 * @param errCode {string} error code
 * @param path
 */
const handleErrorByApi = (errCode, path) => {
    const pathArray = path.split('/')
    const api = pathArray[1].split('?')[0]; // to retrieve the value of api if params are also passed

    //the response to be returned on complication of function
    const response = {
        code: errCode,
        reason: "An Application Error has occurred"
    }

    //handle the cases based on api
    switch (api) {
        case 'upload' :
            handleUpload(errCode, response);
            break;
        default:
            response.reason = "Internal error";
    }
    return response; //return the error response
}
const handleUpload = (errCode, response) => {
    switch (errCode) {
        case '01':
            response.reason = "Error Occurred";
            break;
        case '02' :
            response.reason = "Unable to update journey";
            break;
        case '03' :
            response.reason = "Form not submitted";
            break;
       default :
           response.reason = "Internal Server Error";
    }
}