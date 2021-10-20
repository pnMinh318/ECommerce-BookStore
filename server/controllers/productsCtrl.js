import { ProductModel } from "../models/ProductModel.js";

export const getBooks = async (req, res) => {
    try {
        // for (let index = 0; index < 10; index++) {
        //     let newBook = new ProductModel({
        //         name : `book ${index}`,
        //         // photo: [
        //         //     {src: 'https://techkalzen.com/wp-content/uploads/2020/07/secret-class.jpg' } 
        //         // ],
        //         description: 'descrip',
        //         price: 10+index,
        //         //quantity: 10+index,
        //         //author: '...',
        //         category: 'category',
        //         stock: index,
        //         //language: 'Korean'
        //     })
        //     await newBook.save()
        // }
        const data = await ProductModel.find()
        console.log(data)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: error })

    }

}
export const getBookByID = async (req, res) => {
    try {
        const id = req.params.id
        console.log('id:',id) 
        //const data = await ProductModel.find()
        const data = await ProductModel.findOne({ _id: id })
        console.log('data:',data)
        res.json(data)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
export const createBook = async (req, res) => {
    try {
        const data = await req.body()
        // const data = new BookModel({
        //     name : 'book1',
        //     cover: [
        //         {src: 'https://techkalzen.com/wp-content/uploads/2020/07/secret-class.jpg' } 
        //     ],
        //     price: 'wtf',
        //     quantity: 10,
        //     authhor: '...',
        //     category: 'Manhwa',
        //     language: 'Korean'
        // })
        const newBook = new BookModel(data)
        const book = await BookModel.save(newBook).then(console.log('book inserted'))
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({ error: error })

    }

}

