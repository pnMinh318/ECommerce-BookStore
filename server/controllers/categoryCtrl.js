import { CategoryModel } from "../models/CategoryModel.js";


export const getCategories = async (res,req)=>{
    try {
        const data = await CategoryModel.find()
        res.status(200).send(data.json())
    } catch (error) {
        res.status(500).send({error:error})
    }
}