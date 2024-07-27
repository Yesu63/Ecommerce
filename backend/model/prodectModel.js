const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: String,
    description:String,
    ratings: String,
    images:[
        {
            images: String
        }
    ],
    category:String,
    seller:String,
    stock:String,
    numOfReviews:String,
    createdAt:Date
});

const productModel = mongoose.model('product',ProductSchema);

module.exports = productModel;