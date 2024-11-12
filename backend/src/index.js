const express = require("express");
 const app = express(); 
 const PORT = process.env.PORT || 5000;
 const {connectToMongoDB} = require("./db_config");

connectToMongoDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
