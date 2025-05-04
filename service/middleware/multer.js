const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage,limits: {fileSize: '10mb',files : 5} });
module.exports = upload;