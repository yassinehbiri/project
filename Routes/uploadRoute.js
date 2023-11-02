const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './client/public/uploads/');
  },
  filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const router = express.Router();

router.post('/', upload.single('image'), (req, res) => {
  res.send(`./${req.file.path}`);
});

module.exports = router;