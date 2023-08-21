 import jwt from "jsonwebtoken"
 import SchemaMG_At from "../models/model_At"

 export const CheckMission=async(req,res,next)=>{
    try{
        const checkSignin=req.headers.authorization.split(" ")[1];
            jwt.verify(checkSignin,"susi",async (error,payload)=>{
                if(error){
                    if(error.name=="TokenExpiredError"){
                        return res.json("Token het han");
                    }
                    if(error.name=="JsonWebTokenError"){
                        return res.json("Token khong hop le");
                    }
                }
                const data=await SchemaMG_At.findById(payload._id);
                if(data.role!="admin"){
                    return res.json("Bạn không có quyền Admin !!");
                };
                next();
            });
        // const {_id}=await jwt.verify(checkSignin,"susi");
        // const data=await SchemaMG_At.findById(_id);
        // if(data.role!="admin"){
        //     return res.json("Bạn không có quyền Admin !!");
        // };
        // next();
    }catch(error){return res.status(400).json("Lỗi Catch Mission !!!")};
 };