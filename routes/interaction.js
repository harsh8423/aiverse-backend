const express = require("express");
const router = express.Router();
const interactions = require("../models/interactionSchema");

router.post("/addInteraction", async (req, res) => {
    try {
        const {name,mediaSource,appName,industry,pattern,videoUrl,gifUrl, images, content,iconUrl} = req.body;

        const newInteraction = new interactions({
            name:name,
            mediaSource: mediaSource,
            appName:appName,
            industry:industry,
            pattern:pattern,
            videoUrl:videoUrl,
            gifUrl:gifUrl,
            images:images,
            content:content,
            iconUrl:iconUrl,
            status:'new',
            uploadDate:Date.now(),
          });
        await newInteraction.save().then(async()=>{
          const data = await interactions.find({})
      if(data){
        res.json({ success:true, data});
      }else{
        res.json({ success:false});

      }
        })
        }catch (err) {
        console.log(err)
          res.json({ success:false});
      }
});

router.get("/getInteraction", async (req, res) => {
  try {

      const data = await interactions.find({})
      if(data){
        res.json({ success:true, data});
      }     
      }catch (err) {
      console.log(err)
        res.json({ success:false});
    }
});
router.post("/getAll", async (req, res) => {
  try {
      const {id}= req.body
      const data = await interactions.find({})
      if(data){
        console.log(data)
        const video= data.find((item)=>item._id==id)
        if(video){
          res.json({ success:true, data,video});
        }else{
          res.json({ success:false, message:'Video not found'});
        }
      }
        
      }catch (err) {
      console.log(err)
        res.json({ success:false});
    }
});

router.post("/editInteraction", async (req, res) => {
  try {
      const {id,name,mediaSource,appName,industry,pattern,videoUrl,gifUrl, images, content, iconUrl} = req.body;

      const editInteraction = await interactions.findById(id)

      if(editInteraction){

        editInteraction.name=name,
        editInteraction.mediaSource= mediaSource,
        editInteraction.appName=appName,
        editInteraction.industry=industry,
        editInteraction.pattern=pattern,
        editInteraction.videoUrl=videoUrl,
        editInteraction.gifUrl=gifUrl,
        editInteraction.images=images,
        editInteraction.iconUrl=iconUrl,
        editInteraction.content=content,
        editInteraction.status='updated'
    }
      await editInteraction.save().then(async()=>{
        const data = await interactions.find({})
        if(data){
          res.json({ success:true, data});
        }else{
          res.json({ success:false});
        }
      })
      }catch (err) {
      console.log(err)
        res.json({ success:false});
    }
});


router.delete("/deleteInteraction/:id", async (req, res) => {
  try {
      const id = req.params.id; 
      const deletedInteraction = await interactions.findByIdAndDelete(id);

      if (!deletedInteraction) {
          return res.status(404).json({ success: false, message: "Interaction not found" });
      }

      res.json({ success: true, message: "Deleted successfully", data: deletedInteraction });
  } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});


module.exports = router;
