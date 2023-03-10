const router = require('express').Router();
const File = require('../models/file')

router.get('/:uuid',async (req,res)=>{
    try {
        const file = await File.findOne({uuid:req.params.uuid});

        if (!file) {
            res.render('download',{error:"file is expired"});
        }else{
            res.render('download',{
                uuid:file.uuid,
                fileName:file.filename,
                fileSize:file.size,
                download:`${process.env.APP_BASE_URL}/files/download/${file.uuid}`
            });
        };

    } catch (error) {
        res.render('download',{error:"something went wrong"});
    }
});

module.exports = router
