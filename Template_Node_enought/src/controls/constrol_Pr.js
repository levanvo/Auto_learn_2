import SchemaMG_Pr from "../models/"
import joi from "joi"
import SchemaMG_Ct from "../models/model_Ct"

const SchemaJoi_Pr=joi.object({
    name:joi.string().required(),
    price:joi.number().required(),
    categoryID:joi.string().required(),
});

export const getAll=async(req,res)=>{
    try{
        // const {_sort="price",_limit=3,_oder="asc",_page=2}=req.query;
        // const consider={
        //     limit:_limit,
        //     page:_page,
        //     sort:{
        //         [_sort]:_oder=="desc"?-1:1,
        //     },
        // };
        // const data = await SchemaMG_Pr.paginate({},consider);
        
        // const {_limit=3,_page=2,_sort="price",_oder="desc"}=req.query;
        // const locked={
        //     limit:_limit,
        //     page:_page,
        //     sort:{
        //         [_sort]:_oder=="desc"?-1:1,
        //     }
        // }
        // // console.log(limit,page,sort,oder);
        // const data=await SchemaMG_Pr.paginate({},locked);
        const data=await SchemaMG_Pr.find();
        return res.json(data);
    }catch(error){return res.status(400).json("Try catch getAll PR.....")};
}
export const getOne=async(req,res)=>{
    try{
        const data = await SchemaMG_Pr.findOne({_id:req.params.id}).populate("categoryID");
        return res.json({message:" Thay 1 ===>> ",data});
    }catch(error){return res.status(400).json("Try catch getOne PR.....")};
    // try {
    //     const data = await Product.findOne({ _id: req.params.id }).populate({
    //         path: "categoryID",
    //         select: "-__v",
    //     });
    //     if (!data) {
    //         return res.status(400).json({ message: "Không có sản phẩm nào" });
    //     }
    //     return res.json(data);
    // } catch (error) {
    //     return res.json({
    //         message: error,
    //     });
    // }
}
export const Create=async(req,res)=>{
    try{
        const body=req.body;
        const {error}=await SchemaJoi_Pr.validate(body);
        if(error){return res.json(error.details[0].message)};
        
        const data=await SchemaMG_Pr.create(body);
        await SchemaMG_Ct.findByIdAndUpdate(data.categoryID,{
            $addToSet:{
                products:data._id,
            },
        });
        return res.json({message:" Them 1 ===>> ",data});
    }catch(error){return res.status(400).json("Try catch Create PR.....")};
}
export const Update=async(req,res)=>{
    try{
        const body=req.body;
        const {error}=await SchemaJoi_Pr.validate(body);
        if(error){return res.json(error.details[0].message)};

        const data=await SchemaMG_Pr.findByIdAndUpdate(req.params.id,body,{new:true});
        return res.json({message:" Them 1 ===>> ",data});
    }catch(error){return res.status(400).json("Try catch Update PR.....")};
}
export const Remove=async(req,res)=>{
    try{
        const data=await SchemaMG_Pr.findByIdAndDelete(req.params.id);
        return res.json({message:" Xoa 1 ===>> ",data});
    }catch(error){return res.status(400).json("Try catch Remove PR.....")};
}

// ============================================ Part get All to research !!
// try {
//     const { docs, totalDocs, totalPages } = await Product.paginate({}, options);
//     if (docs.length === 0) {
//         return res.status(400).json({ message: "Không có sản phẩm nào" });
//     }
//     return res.status(200).json({ data: docs, totalDocs, totalPages });
// } catch (error) {
//     return res.json({
//         message: error.message,
//     });
// }