const express = require("express");
const router = express.Router();
const admin = require("../models/adminSchema");

router.post("/addsponsor", async (req, res) => {
    try {
        const {email,name,detail} = req.body;

        const newSponsor=await admin.findById('65e9bb6dbcd2c86f89092293')
        if(newSponsor){
            const data ={
                name:name,
                detail:detail,
                dateStamp: Date.now(),
                email: email
              };
            newSponsor.sponsorResponse.push(data)
        }
        await newSponsor.save().then(()=>{
            res.json({ success:true});
        })
          
        }catch (err) {
        console.log(err)
          res.json({ success:false});
      }
});


router.post("/addsubmit", async (req, res) => {
    try {
        const {desc,url,email,name} = req.body;

        const newSponsor=await admin.findById('65e9bb6dbcd2c86f89092293')
        if(newSponsor){
            const data ={
                name:name,
                desc:desc,
                url:url,
                dateStamp: Date.now(),
                email: email
              };
            newSponsor.submitResponse.push(data)
        }else{
            res.json({ success:false});
        }
        await newSponsor.save().then(()=>{
            res.json({ success:true});
        })
          
        }catch (err) {
        console.log(err)
          res.json({ success:false});
      }
});


router.post("/addemail", async (req, res) => {
    try {
        const {email} = req.body;

        const newSponsor=await admin.findById('65e9bb6dbcd2c86f89092293')
        if(newSponsor){
            newSponsor.emailResponse.push({
                email:email,
                dateStamp:Date.now()
            })
        }else{
            res.json({ success:false});
        }
        await newSponsor.save().then(()=>{
            res.json({ success:true});
        })
          
        }catch (err) {
        console.log(err)
          res.json({ success:false});
      }
});



// DELETE REQUEST


router.post("/deleteemail", async (req, res) => {
    try {

        const {id}=req.body
        const adminId = '65e9bb6dbcd2c86f89092293'; 
        const updatedAdmin = await admin.findByIdAndUpdate(
            adminId,
            { $pull: { emailResponse: { _id: id } } },
            { new: true }
        );
        res.json({ success: true,updatedAdmin });
    } catch (err) {
        console.log(err);
        res.json({ success: false });
    }
});

router.post("/deletesubmit", async (req, res) => {
    try {

        const {id}=req.body
        const adminId = '65e9bb6dbcd2c86f89092293'; 
        const updatedAdmin = await admin.findByIdAndUpdate(
            adminId,
            { $pull: { submitResponse: { _id: id } } },
            { new: true }
        );

        res.json({ success: true,updatedAdmin  });
    } catch (err) {
        console.log(err);
        res.json({ success: false });
    }
});

router.post("/deletesponsor", async (req, res) => {
    try {

        const {id}=req.body
        const adminId = '65e9bb6dbcd2c86f89092293'; 
        const updatedAdmin = await admin.findByIdAndUpdate(
            adminId,
            { $pull: { sponsorResponse: { _id: id } } },
            { new: true }
        );

        res.json({ success: true,updatedAdmin });
    } catch (err) {
        console.log(err);
        res.json({ success: false });
    }
});



module.exports = router;
