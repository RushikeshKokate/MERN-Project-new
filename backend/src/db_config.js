const moogoose = require('mongoose');

 const connectToMongoDB = async() => {
    try {
      await moogoose.connect('mongodb://localhost:27017/crud_db')
      console.log("Connected to MongoDB");
      
    }
    catch (error) {
      console.log(error);
    }
  };

module.exports ={moogoose, connectToMongoDB}