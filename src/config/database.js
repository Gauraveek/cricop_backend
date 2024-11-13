const mongoose = require('mongoose');
const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI).then((data)=>{
        console.log(`Mongo is connected with the server : ${data.connection.host}`);
    }).catch((err) => {
        console.log(err);
    });
};

module.exports = connectDatabase;