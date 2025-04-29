const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/upload');
router.get('/upload/status',uploadController.status);
router.post('/upload',uploadController.upload);

module.exports = router;