import express from "express"
import mongoose from "mongoose"
import routerPr from "./routers/router_Pr";
import routerAt from "./routers/router_At";
import routerCt from "./routers/router_Ct";
const app = express();
app.use(express.json());
app.use(routerPr);
app.use(routerAt);
app.use(routerCt);

mongoose.connect("mongodb://127.0.0.1:27017/Node")
    .then(() => { console.log('Database connection successful') })
    .catch(err => {
        console.error('Database connection error ==== ' + err)
    });
export const viteNodeApp = app;