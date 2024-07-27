const OrderModel = require('../model/orderModel');
const productModel = require('../model/prodectModel');


exports.getOrders = async(req,res,next) =>{
const cartItems = req.body;
const amount = Number(cartItems.reduce((acc,cart)=>(acc + cart.singleProduct.price * cart.qty),0)).toFixed(2);
const status = "bending";
const order =await OrderModel.create({cartItems,amount,status});

cartItems.forEach(async(item)=>{
    const product =await productModel.findById(item.singleProduct._id);
    product.stock = product.stock - item.qty;
    await product.save();
})

    res.json({
        success: true,
        message : "get order working",
        order 
    }) 
} 