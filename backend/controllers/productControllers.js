const { Query } = require("mongoose");
const ProductModel = require("../model/prodectModel")

exports.getProducts = async(req,res,next)=>{
   const query = req.query.keyword ? { name : {
        $regex : req.query.keyword,
        $options : 'i'
    }} : {};
    const products = await ProductModel.find(query);
    res.json({
        success : true,
        status:200, 
        products
    })
}
exports.getSingleProducts =async (req,res,next)=>{
    const product =await ProductModel.findById(req.params.id);
    res.json({
        success : true,
        product
    })
}