import SchemaMG_Ct from "../models/model_Ct"
import SchemaMG_Pr from "../models/model_Pr"
import joi from "joi"

const SchemaJoi_ct=joi.object({
    list:joi.string().required(),
});

export const Allcategory=async(req,res)=>{
    try{
        const data = await SchemaMG_Ct.find();
        return res.json(data)
    }catch(error){return res.status(400).json("Try catch getAll CT.....")};
}
export const getOne_CT=async(req,res)=>{
    try{
        // const data = await SchemaMG_Ct.findById(req.params.id).populate("products");
        const data = await SchemaMG_Ct.findById(req.params.id);
        // const data2=await SchemaMG_Pr.find({categoryID:req.params.id});
        // console.log(data2);
        // const data={...data1.toObject(),data2};
        return res.json({message:" Thay 1 category ===>> ",data});
    }catch(error){return res.status(400).json("Try catch getOne CT.....")};
}
export const Create_CT=async(req,res)=>{
    try{
        const body=req.body;
        const {error}=await SchemaJoi_ct.validate(body);
        if(error){return res.json(error.details[0].message)};

        const data=await SchemaMG_Ct.create(body);
        return res.json({message:" Them 1 category ===>> ",data});
    }catch(error){return res.status(400).json("Try catch Create CT.....")};
}
export const Update_CT=async(req,res)=>{
    try{
        const body=req.body;
        const {error}=await SchemaJoi_ct.validate(body);
        if(error){return res.json(error.details[0].message)};

        const data=await SchemaMG_Ct.findByIdAndUpdate(req.params.id,body,{new:true});
        return res.json({message:" Cap nhat 1 category===>> ",data});
    }catch(error){return res.status(400).json("Try catch Update CT.....")};
}
export const Remove_CT=async(req,res)=>{
    try{
        const data=await SchemaMG_Ct.findByIdAndDelete(req.params.id);
        return res.json({message:" Xoa 1 category===>> ",data});
    }catch(error){return res.status(400).json("Try catch Remove CT.....")};
}