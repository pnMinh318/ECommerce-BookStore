import { ObjectId } from 'bson';
import mongoose from 'mongoose'


const productSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000,
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 32,
    },
    category: {
        //type: ObjectId,
        type: String,
        //ref: 'Category',
        required: true,
    },
    stock: {
        type: Number,
    },
    // discount: {
    //     type: Number,
    //     default: 0,
    // },
    // photo: {
    //     data: Buffer,
    //     contentType: String,
    // },
},
    { timestamps: true }
);

export const ProductModel = mongoose.model('Product', productSchema)