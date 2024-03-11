const express = require("express");
const router = express.Router();
const admin = require("../models/adminSchema");

router.post("/changePassword", async (req, res) => {
    try {
        const {Pass} = req.body;

        const data=await admin.findById('65e9bb6dbcd2c86f89092293')
        if(data){
            data.pass=Pass
        }
        await data.save();
        res.json({ success:true});
        
        }catch (err) {
        console.log(err)
          res.json({ success:false});
      }
});


router.get("/getAdmin", async (req, res) => {
    try {

        const data = await admin.findById('65e9bb6dbcd2c86f89092293')
        console.log(data)
        res.json({ success:true, data});
          
        }catch (err) {
        console.log(err)
          res.json({ success:false});
      }
});

router.post("/addfilter", async (req, res) => {
    try {
        const {category, filterName} = req.body;

        const data=await admin.findById('65e9bb6dbcd2c86f89092293')
        if(data){
            if(category==='appName'){
                data.appName.push(filterName)
            }else if(category==='pattern'){
                data.pattern.push(filterName)
            }else{
                data.industry.push(filterName)
            }
        }
        await data.save().then((data)=>{
            res.json({ success:true,data});
        })
          
        }catch (err) {
        console.log(err)
          res.json({ success:false});
      }
});

//DELETE FILTER................................

router.post("/deleteappName", async (req, res) => {
    try {

        const {filterName}=req.body
        const adminId = '65e9bb6dbcd2c86f89092293'; 
        const data = await admin.findByIdAndUpdate(
            adminId,
            { $pull: { appName: filterName } },
            { new: true }
        );

        if(data){
            res.json({ success: true,data });
        }
    } catch (err) {
        console.log(err);
        res.json({ success: false });
    }
});


router.post("/deletepattern", async (req, res) => {
    try {

        const {filterName}=req.body
        const adminId = '65e9bb6dbcd2c86f89092293'; 
        const data = await admin.findByIdAndUpdate(
            adminId,
            { $pull: { pattern: filterName } },
            { new: true }
        );
        if(data){
            res.json({ success: true,data });
        }
    } catch (err) {
        console.log(err);
        res.json({ success: false });
    }
});


router.post("/deleteindustry", async (req, res) => {
    try {

        const {filterName}=req.body
        console.log(filterName)
        const adminId = '65e9bb6dbcd2c86f89092293'; 
        const data = await admin.findByIdAndUpdate(
            adminId,
            { $pull: { industry: filterName } },
            { new: true }
        );
        if(data){
            res.json({ success: true,data });
        }
    } catch (err) {
        console.log(err);
        res.json({ success: false });
    }
});

router.post("/deletechangelog", async (req, res) => {
    try {

        const {id}=req.body
        const adminId = '65e9bb6dbcd2c86f89092293'; 
        const updatedAdmin = await admin.findByIdAndUpdate(
            adminId,
            { $pull: { changelog: { _id: id } } },
            { new: true }
        );
        res.json({ success: true, data:updatedAdmin.changelog });
    } catch (err) {
        console.log(err);
        res.json({ success: false });
    }
});


module.exports = router;
