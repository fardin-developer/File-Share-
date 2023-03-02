const express = require('express');
const app = express();
const multer = require('multer');

const { v4: uuidv4 } = require('uuid');
uuidv4(); 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  });

const upload = multer({ storage: storage })


app.post('/', upload.single('avatar'), function (req, res, next) {
  
    res.send("file uploaded");

})



app.listen(3000, () => { 
    console.log('Started on port 3000');
});