const mongoose = require("mongoose");
const { Schema } = mongoose;

const interactionSchema = new mongoose.Schema({
    name:{type:String},
    mediaSource: { type: String },
    appName:{type:String},
    industry:{type:String},
    pattern:{type:String},
    videoUrl:{type:String},
    gifUrl:{type:String},
    images:[{type:String}],
    urlSlug:{type:String},
    content:{type:String},
    status:{type:String, enum:['new', 'old', 'updated']},
    uploadDate:{type:Date},
});
const interactions = mongoose.model("interactions", interactionSchema);
module.exports = interactions;