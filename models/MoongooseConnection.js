const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect('mongodb+srv://kagrawal16:F9cpPvZrx8zcyD8S@cluster0.jtq1apr.mongodb.net/aiverse',)
.then(()=>{
    console.log("connection open !!")
})
.catch((err) => {
    console.log("error in catch")
    console.log(err);
})
