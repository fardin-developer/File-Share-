const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path')
const File = require('../models/file');
const { v4: uuidv4 } = require('uuid');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E5);
      const fileExt = path.extname(file.originalname).toLowerCase();
      cb(null, 'fardin-'+uniqueSuffix+ fileExt)
    }
  });

const upload = multer({ storage: storage });


app.post('/', upload.single('avatar'), async function(req, res, next) {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
  
    const file = new File({
      filename: req.file.filename,
      uuid: uuidv4(),
      path: req.file.path,
      size: req.file.size
    });
  
    const response = await file.save();
  
    return res.json({ file: `${process.env.APP_BASE_URL}/files/${response.uuid}` });
  });


module.exports = app;