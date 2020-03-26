const express =  require('express');
const app = express();
const port = 7000;



app.listen(port,function(err){
    if(err){
        console.log(`Error on running the server: ${err}`);
    }
    console.log(`Server is running on port:${port}`);
})