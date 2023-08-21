import mongoose, { mongo } from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

const SchemaMG_Pr = mongoose.Schema(
    {
        name: String,
        price: Number,
        categoryID:{
            type:mongoose.Types.ObjectId,
            ref:"category",
        }
    },{timestamps:true,versionKey:false}
);
SchemaMG_Pr.plugin(mongoosePaginate);

export default mongoose.model("products",SchemaMG_Pr);