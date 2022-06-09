require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const orderRoute = require('./routes/orderRoute');
const cartRoute = require('./routes/cartRoute');
const stripeRoute = require('./routes/stripeRoute');

const connectDB = require('./db/connect');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/api/v1/users', userRoute)
app.use('/api/v1/products', productRoute)
app.use('/api/v1/cart', cartRoute)
app.use('/api/v1/order', orderRoute)
app.use('/api/v1/payment', stripeRoute)

const start = async () => { 
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening at: ${PORT}`);
    }) 
  } catch (error) { 
    console.log(error.message);  
  }
}   
     
start()