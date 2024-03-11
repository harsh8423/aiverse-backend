const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new mongoose.Schema({
    pass: { type: String },
    appName:[{type:String}],
    industry:[{type:String}],
    pattern:[{type:String}],
    changelog:[{
        uploadDate:{type:Date},
        loglist:[{type:String}]
    }],
    sponsorResponse:[{
        name:{type:String},
        email: { type: String },
        detail:{type:String},
        dateStamp:{type:Date},
    }],
    emailResponse:[{
        email: { type: String },
        dateStamp:{type:Date},
    }],
    submitResponse:[{
        name:{type:String},
        email: { type: String },
        desc:{type:String},
        url: { type: String },
        dateStamp:{type:Date},
    }]
});
const admin = mongoose.model("admin", adminSchema);
module.exports = admin;