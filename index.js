// Express js Core concepts
//dependency
const express = require('express');

const app = express();

const port = 5000;

// get http method
app.get('/', (req, res)=>{
    res.send("Hello express world!")
})

// post http method
// app.post('/post', (req, res)=>{
//     res.send('I am post route')
// })

// put method
app.put('/users', (req, res)=>{
    res.send('PUT method')
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})