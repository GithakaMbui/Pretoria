import express from 'express'
import AsyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

// Description Fetch all products
//route Get /api/products
//access Public route
router.get('/', AsyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))


// Description Fetch a single product 
//route Get /api/product/:id
//access Public route
router.get('/:id', AsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        res.json(product)
    } else {
        res.status(404).json({message: 'Product not found'})
    }

    
}))








export default router

