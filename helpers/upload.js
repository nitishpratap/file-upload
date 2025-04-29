async function upload(req) {
    console.log("body is :::::::",req.body);
    return {
        message :'Hello from upload',
        status : 200,
    }
}
async function status(req){
    return {
        status : 200,
        upload : 55
    }
}
module.exports = {
    upload,
    status
};