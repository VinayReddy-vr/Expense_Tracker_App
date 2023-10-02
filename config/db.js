const mongoose = require('mongoose');
const URI = `mongodb+srv://vinayreddyvr24:jWzA11NgOh3pQBkF@cluster1.ztrdpdy.mongodb.net/expensetracker?
retryWrites=true&w=majority`

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(URI,{
            UseNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
    }
    catch(err){
        console.log(`Error: ${err.message}` .red);
        process.exit(1);
    }
}

module.exports = connectDB;