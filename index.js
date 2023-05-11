const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Car Doctor Server is on fire');
})


app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)
})