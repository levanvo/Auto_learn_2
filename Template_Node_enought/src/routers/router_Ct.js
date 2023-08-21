import express from "express"
import { Allcategory, Create_CT, Remove_CT, Update_CT, getOne_CT } from "../controls/control_Ct";

const routerCt=express.Router();

routerCt.get("/ct",Allcategory);
routerCt.get("/ct/:id",getOne_CT);
routerCt.post("/ct",Create_CT);
routerCt.put("/ct/:id",Update_CT);
routerCt.delete("/ct/:id",Remove_CT);

export default routerCt;