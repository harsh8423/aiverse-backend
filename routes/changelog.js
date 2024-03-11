const express = require("express");
const router = express.Router();
const admin = require("../models/adminSchema");

router.post("/addchangelog", async (req, res) => {
    try {
        const {uploadDate,loglist} = req.body;

        const data=await admin.findById('65e9bb6dbcd2c86f89092293')
        if(data){
            const logdata={
                uploadDate:uploadDate,
                loglist:loglist
            }
            data.changelog? data.changelog.push(logdata):data.changelog=logdata
        }
        await data.save();
        res.json({ success:true, data:data.changelog});
        
        }catch (err) {
        console.log(err)
          res.json({ success:false});
      }
});

router.get("/getchangelog", async (req, res) => {
    try {

        const data = await admin.findById('65e9bb6dbcd2c86f89092293')
        if(data){

            res.json({ success:true, data:data.changelog});
        }
          
        }catch (err) {
        console.log(err)
          res.json({ success:false});
      }
});
module.exports = router;

