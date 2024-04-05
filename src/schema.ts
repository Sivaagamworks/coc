import mongoose from "mongoose";

const ServiceModuleSchema = new mongoose.Schema({
createby:{
    type:String,
},
updatedBy:{
    type:String,
},
activity:{
    type:String,
    enum:['read','write','update','delete','put']
},
msg:{
    type:String
}
}, { timestamps: true });


export default ServiceModuleSchema