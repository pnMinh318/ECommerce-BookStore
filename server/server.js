import express from 'express'
import cors from 'cors'
import usersRouter from './routers/usersRouter.js'
import productsRouter from './routers/productsRouter.js'
import couponsRouter from './routers/couponsRouter.js'
import ordersRouter from './routers/ordersRouter.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())
const port = 5000
const URI = process.env.URI
app.use(cors())
console.log(URI)

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected');
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  })
  .catch((error) => {
    console.log(error);
  });

app.use('/api/products/', productsRouter)
app.use('/api/orders/', ordersRouter)
app.use('/api/users', usersRouter)
app.use('/api/users/:action', usersRouter)
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID)
})
//app.get('/api/coupons',couponsRouter)
//app.get('/api/orders',ordersRouter)