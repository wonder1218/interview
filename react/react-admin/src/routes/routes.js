const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/react'; // 本地数据库地址

mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('connected', () => {
    console.log('MongoDB connected success '.green);
});

db.on('errror', () => {
    console.error('MongoDB connected fail');
});

db.on('disconnected', () => {
    console.log('MongoDB connected to disconnected');
});
