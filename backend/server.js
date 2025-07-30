require('dotenv').config();
const express = require('express');
const app = express();
exports.app = app;
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const connectDB = require('./src/config/dbConn.js');
const PORT = process.env.PORT || 3500;
const cors = require('cors');
const corsOptions = require('./src/config/corsOptions.js');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const { createPaymobOrder } = require('./src/controllers/paymobController.js');

// Custom Middleware ( logger )
app.use('logger', require('./src/middleware/logger.js'));
// Cross Origin Resource Sharing
app.use(cors(corsOptions));
// Middleware for JSON
app.use(express.json());
// Middleware for Cookies
app.use(cookieParser());

app.get('/', (req, res) => res.send('U-Store Backend is Running'));
app.use('/auth', require('./src/routes/authRoutes.js'));
app.use('/users', require('./src/routes/userRoutes.js'));
app.use('/categories', require('./src/routes/categoryRoutes.js'));
app.use('/products', require('./src/routes/productRoutes.js'));

app.use('/orders', require('./src/routes/orderRoutes.js'));

app.post('/create-paymob-order', createPaymobOrder);

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('message', (data) => {
        console.log('Message received:', data);
        io.emit('message', data);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

connectDB();
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`)
});