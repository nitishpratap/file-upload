const fs = require('fs');
const path = require('path');



async function upload(req) {
    const files = req.files;
    // console.log(files);
     const filesPromise = files.map(async (file) => {
        const size = file.size/1024;
        const fileName = file.originalname;
        if (size > 1024) {
            //upload to aws bucket
            return {
                status: 'success',
                fileName : file.fileName,
                message : "Upload to AWS"
            }
        }else {
            //save to upload
            const targetPath = path.join(__dirname, `../upload/${fileName}`);

            try {
                fs.writeFile(targetPath,file.buffer,function (err) {
                    if (err) throw err;
                    console.log("Successfully uploaded ::::::::",file.originalname);
                });
                return {
                    status: 'success',
                    fileName : file.originalname,
                    message : "Saved to local system"
                }
            }catch(err) {
                return {
                    status: 'Error',
                    fileName : file.originalname,
                    message : "Failed to upload file"
                }
            }
        }
    })
    console.log(filesPromise);
     const resultOfPromise = Promise.all(filesPromise);
     return await resultOfPromise;
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