const express = require('express');
const { ServerConfig } =  require('./config');//it will automaticlly import index.js file


const setupAndStartServer = async ()=>{
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.listen(ServerConfig.PORT, ()=>{
    console.log(`Server is listenting at Port ${ServerConfig.PORT}`);
})
}

setupAndStartServer();

