import { ProductModel } from "../models/ProductModel.js";
export const getBooks = async (req, res) => {
    try {
        const category = req.query.category

        let data
        if (category) {
            category.replace(' ','-')
            data = await ProductModel.find({ category: category })
            console.log(category)
        } else {
            data = await ProductModel.find({})
        }
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: error })

    }
}
export const getBookByID = async (req, res) => {
    try {
        const id = req.params.id
        console.log('id:', id)
        const data = await ProductModel.findOne({ _id: id })
        console.log('data:', data)
        res.json(data)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
export const deleteProductByID = async (req, res) => {
    try {
        const id = req.params.id
        const product = await ProductModel.findById(id)
        if (product) {
            await product.remove()
            res.json({ message: 'Product removed successfully' })
        } else {
            res.status(404).json({ error: 'Product Not Found' })
        }
    } catch (error) {
        res.status(404).json({ error: error })
    }
}
export const createProduct = async (req, res) => {
    try {
        const { name, price, details, img, description, category, stock, discount } = req.body
        console.log(req.body)
        const newProduct = new ProductModel({
            name: name,
            price: price,
            details: details,
            img: img,
            description: description,
            category: category,
            stock: stock,
            discount: discount
        })
        const createdProduct = await newProduct.save()
        res.status(201).json(createdProduct)
    } catch (error) {
        res.status(500).json({ error: error })

    }

}
export const updateProduct = async (req, res) => {
    try {
        const { name, price, details, img, description, category, stock, discount } = req.body
        const product = await ProductModel.findById(req.params.id)

        if (product) {
            product.name = name
            product.price = price
            product.details = details
            product.description = description
            product.category = category
            product.stock = stock
            product.img = img
            product.discount = discount
            const updatedProduct = await product.save()
            res.json(updatedProduct)
        } else {
            res.status(404).json({ error: 'No product Found' })
        }
    } catch (error) {
        res.status(404).json({ error: error })
    }

}
export const getNewestBooks = async (req, res) => {
    try {
        const data = await ProductModel.find({}).sort({ createdAt: -1 }).limit(4)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}