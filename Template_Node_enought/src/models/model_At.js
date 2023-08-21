import mongoose, { mongo } from "mongoose"

const SchemaMG_At = mongoose.Schema(
    {
        name: String,
        email: {
            type:String,
            unique:true,
            required:true
        },
        pass: {
            type:String,
            required:true
        },
        role:String,
    },
    {timestamps:true,versionKey:false}
);

export default mongoose.model("authors",SchemaMG_At);