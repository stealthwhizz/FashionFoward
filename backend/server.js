require('dotenv').config()

const express = require('express')
const app = express();
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes'); // Ensure this path is correct

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // For serving uploaded images

// Routes
app.use('/api', productRoutes);

const PORT = process.env.PORT || 4000

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // For serving uploaded images

// Routes
app.use('/api', productRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.use(cors())

const allowedOrigins = ['https://fashion-store-drab.vercel.app', 'http://localhost:3000'];
const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

app.use(cors(corsOptions));


//Database connection
const url = 'mongodb+srv://stealthwhiz:imAmogh@0311@fashionforward.zp4ni.mongodb.net/?retryWrites=true&w=majority&appName=FashionForward'
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database Connected!')
}).catch(err => {
    console.log("Connection Failed")
})

//Assets
app.use(express.static('uploads'))
//Express-enable json
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//GlobalMiddleware
app.use((req, res, next) => {
    // res.locals.session = req.session
    // res.locals.user = req.user
    next()
})


require('./routes/web')(app)

app.listen(PORT, () => {
    console.log(`App is Live on http://localhost:${PORT}`)
})

//print product fetch
console.log(`${process.env.REACT_APP_API_KEY}/api/products`)