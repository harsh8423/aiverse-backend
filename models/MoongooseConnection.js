const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect('mongodb+srv://dilsecricket1:8423047004@cluster0.lg8qhk8.mongodb.net/AIverse',)
.then(()=>{
    console.log("connection open !!")
})
.catch((err) => {
    console.log("error in catch")
    console.log(err);
})
