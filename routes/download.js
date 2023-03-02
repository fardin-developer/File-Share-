const express = require('express');
const app = express();
const File = require('../models/file');
const path = require('path');

app.get('/:uuid',async (req,res)=>{
    try {
        const file = await File.findOne({uuid:req.params.uuid});
        if (file) {
            const fileDir = path.join(__dirname, `../uploads/${file.filename}`);

            res.download(fileDir);
        }
    } catch (error) {

        
        
    }
   
})


module.exports = app;