import {BookModel} from "../models/BookModel.js";

export const getBooks = async (req, res) => {
    try {
        // const xdata = new BookModel({
        //     name : 'book1',
        //     cover: [
        //         {src: 'https://techkalzen.com/wp-content/uploads/2020/07/secret-class.jpg' } 
        //     ],
        //     price: 10,
        //     quantity: 10,
        //     authhor: '...',
        //     category: 'Manhwa',
        //     language: 'Korean'
        // })
        // await newBook.save()
        const data = await BookModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error: error})
        
    }

}

export const createBook = async (req, res) => {
    try {
        const data=await req.body()
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
        const newBook=new BookModel(data)
        const book = await BookModel.save(newBook).then(console.log('book inserted'))
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({error: error})
        
    }

}

