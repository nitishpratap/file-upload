const express = require('express');
const router = express.Router();
const upload = require('../service/middleware/multer');
const uploadController = require('../controllers/upload');
router.get('/upload/status',uploadController.status);
router.post('/upload',upload.array('file',5),uploadController.upload);

module.exports = router;